import { server, socketsOnline } from './config/app';
import mongoose from 'mongoose'
import RabbitServer from './broker/rabbitmq';
import { socketAuth } from './config/socket-io/socket-auth';
import { sendNotification } from './config/socket-io/send-notification';
import 'dotenv/config'
const PORT = process.env.DEV ? 3030 : process.env.PORT // 3030 DEV 5050 DOCKER
const MONGO_URL = process.env.DEV ? process.env.MONGO_URL : process.env.MONGO_URL_DEPL
const RABBIT_URL = process.env.DEV ? process.env.RABBIT_URL : process.env.RABBIT_URL_DEPL
const rabbitBroke = new RabbitServer(RABBIT_URL)

mongoose.connect(MONGO_URL).then(async () => {
  await rabbitBroke.start().then(() => {
    socketsOnline.use(socketAuth)
    rabbitBroke.consumeFromQueue(msg => {
      sendNotification(JSON.parse(msg.content.toString()), socketsOnline)
    })
    server.listen(PORT, () => {
      console.log('server is runnng on ' + PORT)
    })
  })
})
export { rabbitBroke, mongoose }
