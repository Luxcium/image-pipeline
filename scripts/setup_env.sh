#!/bin/bash

# Setup Environment Script
# This script sets up the development environment for the project.

echo "Setting up the development environment..."

# Install Python dependencies
if [ -f "library/requirements.txt" ]; then
    echo "Installing Python dependencies..."
    pip install -r library/requirements.txt
else
    echo "No Python dependencies to install."
fi

# Install Node.js dependencies
if [ -f "package.json" ]; then
    echo "Installing Node.js dependencies..."
    pnpm install
else
    echo "No Node.js dependencies to install."
fi

echo "Environment setup complete."
