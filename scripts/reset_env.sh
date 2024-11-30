#!/bin/bash

# Reset Environment Script
# This script resets the development environment for the project.

echo "Resetting the development environment..."

# Remove Python virtual environment if it exists
if [ -d "venv" ]; then
    echo "Removing Python virtual environment..."
    rm -rf venv
fi

# Remove Node.js modules
if [ -d "node_modules" ]; then
    echo "Removing Node.js modules..."
    rm -rf node_modules
fi

# Re-run setup script
./scripts/setup_env.sh

echo "Environment reset complete."
