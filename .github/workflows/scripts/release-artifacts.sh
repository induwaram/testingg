#!/usr/bin/env bash

# Variables
REPO_DIR=$1
GIT_TOKEN= $2
APP_MANIFEST_PATH=$REPO_DIR/package.json
VERSION=$(jq -r '.version' "$APP_MANIFEST_PATH")
ARTIFACT_NAME=asgardeo-login-playground-$VERSION
GIT_USERNAME='wso2-iam-cloud-bot'

# Check relevant packages are available
command -v npm >/dev/null 2>&1 || { echo >&2 "Error: $0 script requires 'npm' for buid.  Aborting as not found."; exit 1; }
command -v jq >/dev/null 2>&1 || { echo >&2 "Error: $0 script requires 'jq' for JSON Processing.  Aborting as not found."; exit 1; }
command -v gh >/dev/null 2>&1 || { echo >&2 "Error: $0 script requires 'gh' to call GitHub APIs.  Aborting as not found."; exit 1; }

# Build asgardeo docs
echo Building Asgardeo Login Playground
npm ci
npm run build

# Copy built distribution
cp -r build out

# Zip the distribution
zip -r "$ARTIFACT_NAME".zip out

# Release the version
echo "$GIT_TOKEN" | gh auth login --with-token
gh release create --title "Asgardeo login Playground - v$VERSION" v"$VERSION" "$ARTIFACT_NAME".zip

# Create new version
incrementPackVersion() {
    old_version=$1
    echo "$old_version" | awk -F. '{print $1"."$2"."$3+1}'
}

# Update version in package.json
NEW_RELEASE_VERSION=$(incrementPackVersion "$VERSION")
echo "Next asgardeo-login-playground version: $NEW_RELEASE_VERSION"
tmp=$(mktemp)
jq --arg variable "$NEW_RELEASE_VERSION" '.version = $variable' package.json > "$tmp" && mv "$tmp" package.json

git -C "$REPO_DIR" config user.name "$GIT_USERNAME"
git -C "$REPO_DIR" config user.email "iam-cloud@wso2.com"

git -C "$REPO_DIR" add "$APP_MANIFEST_PATH"
git -C "$REPO_DIR" commit -m "[Asgardeo Release] [GitHub Actions] [Release $NEW_RELEASE_VERSION] Bump version"
git -C "$REPO_DIR" push

mkdir asgardeo-deployment-pipeline

echo "Release builder execution is completed."
