#!/bin/bash 

# Stop script if there is error
set -e

# Build project
echo "Building project..."
pnpm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
pnpm run deploy

echo "Deployment successful!"
