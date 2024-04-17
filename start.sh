#!/bin/bash

# Navigate to the client folder and start the client
cd client
yarn dev &

# Navigate back to the root folder
cd ..

# Start the server
cd server
yarn dev
