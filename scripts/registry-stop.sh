#! /usr/bin/env bash
set -e

function bummer {
  printf "Well, this is unexpected :/\n"
  printf "Try running with set -ex to debug...\n\n\n"
}
trap bummer ERR

TESTREGISTRY='http://localhost:9099/'

# Clean room start to this bounce
ps -A | grep -i "[V]erdaccio" | awk '{ print $1 }' | xargs kill -9
[[ -d ./scripts/storage ]] && rm -rf ./scripts/storage
[[ -f ./scripts/htpasswd ]] && rm ./scripts/htpasswd
[[ -f ./scripts/verdaccio.log ]] && rm ./scripts/verdaccio.log
