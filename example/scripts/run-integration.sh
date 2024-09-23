#!/usr/bin/env bash

DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/setenv.sh

docker-compose -f docker-compose.integration.yml up -d
echo '🟡 - Waiting for database to be ready...'

$DIR/wait-for-it.sh "localhost:5432" -- echo '🟢 - Database is ready!'
$DIR/wait-for-it.sh "localhost:5672" -- echo '🟢 - RabbitMQ is ready!'

sleep 2

yarn test:e2e:start

docker-compose -f docker-compose.integration.yml down
