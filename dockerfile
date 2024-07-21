# Stage 1: Build the main Next.js app
FROM node:20 AS main-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Build the MUI app
FROM node:20 AS mui-builder
WORKDIR /app/uis/mui
COPY uis/mui/package*.json ./
RUN npm ci
COPY uis/mui ./
RUN npm run build

# Stage 3: Build the Ant Design app
FROM node:20 AS ant-builder
WORKDIR /app/uis/ant
COPY uis/ant/package*.json ./
RUN npm ci
COPY uis/ant ./
RUN npm run build

# Stage 4: Final stage
FROM node:20-alpine
WORKDIR /app

# Copy the built Next.js app
COPY --from=main-builder /app/.next ./.next
COPY --from=main-builder /app/public ./public
COPY --from=main-builder /app/package*.json ./
COPY --from=main-builder /app/next.config.mjs ./

# Copy the built MUI app to the public folder
COPY --from=mui-builder /app/uis/mui/build ./public/mui

# Copy the built Ant Design app to the public folder
COPY --from=ant-builder /app/uis/ant/build ./public/ant

# Install production dependencies
RUN npm ci --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
