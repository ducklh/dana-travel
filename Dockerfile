FROM node:18-alpine
WORKDIR /app

RUN npm install -g npm@9
COPY package*.json .
# COPY themes ./themes
# COPY extensions ./extensions
# COPY public ./public
# COPY media ./media
# COPY config ./config
COPY translations ./translations


# Install node modules
RUN npm install

# Manually install sharp for linuxmusl architecture
# RUN npm install --platform=linuxmusl --arch=x64 sharp

COPY . .
# RUN npm install
RUN npm run build

EXPOSE 80
CMD ["npm", "run", "start"]
