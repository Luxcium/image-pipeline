#!/bin/bash

# Create a new Conda environment for the project
ENV_NAME="your_env_name"

# Check if the environment already exists
if conda env list | grep -q "$ENV_NAME"; then
    echo "Environment '$ENV_NAME' already exists."
else
    conda create --name "$ENV_NAME" python=3.8 -y
    echo "Environment '$ENV_NAME' created successfully."
fi
