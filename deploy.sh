#!/usr/bin/env bash
remote=root@47.94.239.228
ssh $remote "cd /www/nsus; git pull; yarn; yarn build; cd /home; ./ossutil cp -r --update oss://nsus-assets /www/nsus/dist; pm2 restart nsus"
