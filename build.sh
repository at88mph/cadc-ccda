#!/bin/sh

echo "Building using Docker."
docker run --rm -ti -v $(pwd):/srv/jekyll -v ${HOME}/.bundle:/home/jekyll/.bundle jekyll/builder:3 jekyll build
echo ""
echo "Build complete."
echo ""
