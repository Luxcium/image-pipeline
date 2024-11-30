#!/bin/bash

# Verify Environment Script
# This script verifies the development environment setup for the project.

echo "Verifying the development environment..."

# Check Python installation
if command -v python3 &>/dev/null; then
    echo "Python is installed."
else
    echo "Python is not installed. Please install Python 3."
    exit 1
fi

# Check pip installation
if command -v pip &>/dev/null; then
    echo "pip is installed."
else
    echo "pip is not installed. Please install pip."
    exit 1
fi

# Check Node.js installation
if command -v node &>/dev/null; then
    echo "Node.js is installed."
else
    echo "Node.js is not installed. Please install Node.js."
    exit 1
fi

# Check pnpm installation
if command -v pnpm &>/dev/null; then
    echo "pnpm is installed."
else
    echo "pnpm is not installed. Please install pnpm."
    exit 1
fi

echo "Environment verification complete."
