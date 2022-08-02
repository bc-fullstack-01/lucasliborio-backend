import { server, socketsOnline } from './config/app';
import mongoose from 'mongoose'
import RabbitServer from './broker/rabbitmq';
import { socketAuth } from './config/socket-io/socket-auth';
import { sendNotification } from './config/socket-io/send-notification';

const PORT = process.env.PORT || 4000 // 4000 DEV 5000 DOCKER
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/dev-db'
const RABBIT_URL = process.env.RABBIT_URL || 'amqp://localhost:'

const rabbitBroke = new RabbitServer(RABBIT_URL)

mongoose.connect(MONGO_URL).then(async () => {
  await rabbitBroke.start().then(() => {
    socketsOnline.use(socketAuth)
    rabbitBroke.consumeFromQueue(msg => {
      sendNotification(JSON.parse(msg.content.toString()), socketsOnline)
    }) 
    server.listen(PORT|| 4000, () => {
      console.log('server is runnng on ' + PORT)
    })
  })
})
export { rabbitBroke, mongoose}
