#!/usr/bin/env bash

_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

docker run --rm -v $_DIR:/tmp davidonlaptop/aglio -i /tmp/index.md -o /tmp/_apidoc.html
