#!/bin/bash
cd /home/kavia/workspace/code-generation/tigertales-exploring-the-majesty-of-big-cats-96173-96180/main_container_for_tigertales
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

