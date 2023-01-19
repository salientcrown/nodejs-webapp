# Stage 1: Build
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app/dist ./
COPY --from=build /app/node_modules ./node_modules
CMD ["npm", "start"]
