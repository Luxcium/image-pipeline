#!/bin/bash

# Regenerate the Conda environment for the project
ENV_NAME="your_env_name"

# Remove the existing environment if it exists
if conda env list | grep -q "$ENV_NAME"; then
    conda remove --name "$ENV_NAME" --all -y
    echo "Environment '$ENV_NAME' removed."
fi

# Create a new environment
conda create --name "$ENV_NAME" python=3.8 -y
echo "Environment '$ENV_NAME' created successfully."
