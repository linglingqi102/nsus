#!/usr/bin/env bash
remote=root@47.94.239.228
ssh $remote "cd /www/nsus; git pull; yarn; yarn build; pm2 restart nsus"
