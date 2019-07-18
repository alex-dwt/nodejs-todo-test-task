#!/usr/bin/env bash

export COMPOSE_FILE=docker-compose.yml:docker-compose.test.yml

docker-compose up -d database

docker-compose up server

isPassed=$(docker inspect node-todo-test_server_1 --format='{{.State.ExitCode}}')

docker-compose down -t 1

if [ $isPassed -ne 0 ]; then
  printf "\n\nThere are some errors, tests are NOT OK\n\n"
else
  printf "\n\nEverything looks good, tests are OK\n\n"
fi