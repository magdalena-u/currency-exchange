dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml

build:
	docker-compose $(dev-dockerfile) build
	make dev

dev:
	docker-compose $(dev-dockerfile) up