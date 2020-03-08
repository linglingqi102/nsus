#!/usr/bin/env bash
remote=root@47.94.239.228
ssh $remote "cd /www/nsus"
git pull
yarn build
pm2 start nsus