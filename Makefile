all:
	@git pull
	@git add *
	@git commit -am "update"
	@git push
