# ClimatCheck — Expo web preview in Docker
# Usage: make run

SERVICE := climatcheck

.PHONY: all build run up down logs sh clean

all: run

build:
	docker compose build

# Foreground: build + start, logs in this terminal, Ctrl+C to stop
run: build
	docker compose up

# Background: start detached
up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f $(SERVICE)

# Shell into the running container
sh:
	docker compose exec $(SERVICE) sh

# Stop, remove containers + volumes + the built image
clean:
	docker compose down -v --rmi local
