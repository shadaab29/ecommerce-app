#!/bin/bash

cd ~/ecommerce-app

if ! command -v docker &> /dev/null; then
  echo "Installing Docker..."
  sudo apt update
  sudo apt install -y docker.io docker-compose
  sudo usermod -aG docker $USER
fi

docker-compose down
docker-compose up -d --build

echo "Deployment complete."