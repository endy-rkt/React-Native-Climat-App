# ClimatCheck

Expo-managed React Native weather app (SDK 48 / RN 0.71). Runs as a
web preview inside Docker — no local Node/Expo install needed.

## Requirements

- Docker + Docker Compose (v2, the `docker compose` plugin)

## Quickstart

```
make run
```

Builds the image, starts the dev server, streams logs in this
terminal. Open **http://localhost:19006**.

Source is bind-mounted, so edits on the host hot-reload in the
browser. `Ctrl+C` stops it.

## Other commands

```
make build   # just build the image
make up      # start detached (background)
make down    # stop
make logs    # follow logs (detached mode)
make sh      # shell into the running container
make clean   # stop + remove containers, volumes, and the built image
```

## Ports

- `19006` — web app + hot-reload websocket
- `19000` — Expo dev server

## Notes

- Web support (`react-native-web`, `react-dom`,
  `@expo/webpack-config`) is pinned in `package.json` — the original
  project didn't have it, `expo start --web` won't run without it.
- Dockerfile passes `--offline` to `expo start` to skip an
  Expo-servers version check; drop it if you want that check back.
- This setup targets the **web** preview only. Running on a physical
  device (Expo Go) or an Android emulator needs a different
  network/port setup — ask if you want that added.

## License

MIT — see `LICENSE`.
