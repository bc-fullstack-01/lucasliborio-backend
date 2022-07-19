FROM node:latest
WORKDIR /usr/workspace/sysmap-api/
ENV SECRET_JWT=SUPERSECRET123978
ENV MONGO_URL='mongodb://mongo:27017/social-media-sysmap'
ENV RABBIT_URL='amqp://rabbitmq:'
ENV PORT=5050
ENV BUCKET_ENDPOINT='http://minio:9000'
ENV BUCKET_ACCESS_KEY='lucasliborio'
ENV BUCKET_SECRET_KEY='tododiaedia'
COPY ./package.json /usr/workspace/sysmap-api/
RUN npm install --omit=dev
COPY ./build /usr/workspace/sysmap-api/build/
EXPOSE 5050
