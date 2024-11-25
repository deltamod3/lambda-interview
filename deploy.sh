#!/bin/bash
export AWS_PROFILE=justine

# Install dependencies using npm
npm install

# Package the Serverless project
sls package

# Deploy the Serverless project
sls deploy
