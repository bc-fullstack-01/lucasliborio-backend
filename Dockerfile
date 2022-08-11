FROM node:18.4.0
WORKDIR /usr/workspace/sysmap-api/
COPY ./package.json /usr/workspace/sysmap-api/
RUN npm install --omit=dev
COPY ./build /usr/workspace/sysmap-api/build/
EXPOSE 5050
