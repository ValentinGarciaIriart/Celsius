#!/bin/bash

npm run test

# Check if the tests failed
if [ $? -ne 0 ]; then
  echo "Tests failed. Exiting build."
  exit 1
fi
