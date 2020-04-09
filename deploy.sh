#!/usr/bin/env bash
remote=root@47.94.239.228
ssh $remote "cd /www/nsus; 
git pull; 
yarn; 
yarn build; 
cd /home; 
./ossutil rm -rf oss://nsus-assets;
./ossutil cp /www/nsus/dist -r oss://nsus-assets; 
pm2 restart nsus"
