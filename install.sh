#!/bin/bash


cd ./plugins/ping-server
npm i
npm link

cd ../hermione-auto-start-selenium
npm link ping-server
npm i
npm link

cd ../hermione-auto-start-project
npm link ping-server
npm i
npm link

cd ../../
npm ci
npm link hermione-auto-start-selenium hermione-auto-start-project ping-server

