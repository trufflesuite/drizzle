#! /usr/bin/env bash
set -e

function bummer {
  printf "Well, this is unexpected :/\n"
  printf "Try running with set -ex to debug...\n\n\n"
}
trap bummer ERR

TESTREGISTRY='http://localhost:9099/'
USERNAME=`whoami`
PASSWORD='password'
EMAIL="${USERNAME}@test.ee"

function do_adduser () {
  /usr/bin/expect << ACKS
  log_user 1
  spawn npm adduser --registry "${TESTREGISTRY}"
  expect {
    "Username:" { send "$USERNAME\r"; exp_continue }
    "Password:" { send "$PASSWORD\r"; exp_continue }
    "Email: (this IS public)" { send "$EMAIL\r"; exp_continue }
  }
ACKS
echo "${USERNAME} registered to ${TESTREGISTRY}"
}

# Clean room start to this bounce
ps -A | grep -i "[V]erdaccio" | awk '{ print $1 }' | xargs kill -9
[[ -d ./scripts/storage ]] && rm -rf ./scripts/storage
[[ -f ./scripts/htpasswd ]] && rm ./scripts/htpasswd
[[ -f ./scripts/verdaccio.log ]] && rm ./scripts/verdaccio.log

nohup verdaccio --config ./scripts/verdaccio-config.yml &>/dev/null 2>&1 &
for i in {1..5}; do
  sleep 1
  if [[ "lsof -i :9099 || grep -q ':9099.*LISTEN'" ]] ; then
    break
  else
    echo "waiting for Verdaccio to start: ${i} secs..."
    if [[ "${i}" -eq 5 ]] ; then
      echo "Verdaccio ws not able to start"
      /bin/this-command-fails
    fi
  fi
done
echo "Verdaccio restarted on: ${TESTREGISTRY}"

OLD_REG=`npm config get registry`
npm config set registry "${TESTREGISTRY}"
[ ${OLD_REG} != ${TESTREGISTRY} ] && \
  printf "Default npm registry changed:\n\tfrom: ${OLD_REG}\n\tto: ${TESTREGISTRY}\n" &&
  printf "The following command will revert:\n\tnpm config set registry ${OLD_REG}\n"

if [ -f /usr/bin/expect ] ; then
  do_adduser
else
  printf "You should register with the test registry:\n"
  printf "\tnpm adduser --registry ${TESTREGISTRY}\n"
fi
