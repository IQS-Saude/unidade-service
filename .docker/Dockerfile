FROM node:16-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:16-alpine as final
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

RUN npm prune

EXPOSE 8080
ENTRYPOINT [ "node", "dist/main" ]