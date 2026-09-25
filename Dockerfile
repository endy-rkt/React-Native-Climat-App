FROM node:18-bullseye

# Toolchain for any transitive deps that need to build native bindings
RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# 19006 = web app + HMR websocket, 19000 = Expo dev server
EXPOSE 19000 19006

CMD ["npx", "expo", "start", "--web", "--offline"]
