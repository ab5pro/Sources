#!/bin/bash

args1="$1"
args2="$2"

pm2 start --time --namespace "oa2-bot" --name "oAuth-$args1" /root/oAuth2/Client/dist/Client -- "$args2"
pm2 logs "oAuth-$args1"
