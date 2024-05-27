# Fase base
FROM node:20.13.1-alpine as base

# Instalação de dependências do sistema necessárias para compilação de pacotes nativos
RUN apk add --no-cache \
  git \
  python3 \
  make \
  g++ \
  libtool \
  autoconf \
  automake

WORKDIR /app
COPY package*.json ./
EXPOSE 3000

# Fase de build
FROM base as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Fase de produção
FROM base as production

WORKDIR /app
ENV NODE_ENV=production

# Copia os artefatos de build e outras partes necessárias do código
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Instala apenas dependências de produção
RUN npm ci --only=production

CMD ["npm", "start"]

# Fase de desenvolvimento
FROM base as dev

WORKDIR /app
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
