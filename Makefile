dev:
	NODE_ENV=dev webpack-dev-server -d --progress --colors --content-base www/
	# tsc -w &
	# ./node_modules/http-server/bin/http-server -o
build:
	webpack -p
