#!/usr/bin/env bash

function build_and_push {
    git pull --rebase && \
    build_local && \
    git push origin master
}

function local_https_server {
    gulp clean && gulp serve
}

function deploy {
    git push heroku master
}

function build_local {
    gulp test
}

function build_deploy_stage {
    build_and_push && deploy
}

function js_dependency {
    npm install && bower install
}

function usage {
  echo Usage:
  echo ======================
  echo s for start local development server at 9000 port
  echo a for git pull/local build/git push/deploy to stage
  echo d for deploy to stage
  echo p for git pull/local build/git push
  echo b for local build
  echo js for update javascript dependency
  echo none of the above will trigger local build only
  echo ======================
}

function main {
  	case $1 in
		js) js_dependency ;;
		s) local_https_server ;;
		a) build_deploy_stage ;;
		d) deploy ;;
		p) build_and_push ;;
		b) build_local ;;
		h) usage ;;
		*) build_local ;;
	esac
}

main $@