prod_deploy:
	git push -f heroku master
	heroku run rails db:migrate

dev_start:
	yarn start