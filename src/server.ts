import { app } from './config/app';
import mongoose from 'mongoose'
import RabbitServer from './broker/rabbitmq';

const PORT = process.env.PORT || 4000 // 4000 DEV 5000 DOCKER
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/dev-db'
const RABBIT_URL = process.env.RABBIT_URL || 'amqp://localhost:'

const rabbitBroke = new RabbitServer(RABBIT_URL)

mongoose.connect(MONGO_URL).then(async () => {


  await rabbitBroke.start().then(() => {
    rabbitBroke.consumeFromQueue(msg => {
      console.log(JSON.parse(msg.content.toString()))
    })
  })
  app.listen(PORT|| 4000, () => {
    console.log('server is running on ' + PORT)
  })
})
.catch((err) => { 
  console.log(err)
  console.log(RABBIT_URL)
  console.log(MONGO_URL)
  console.log('cant reach mongo db, please look the logs')
})


export { rabbitBroke }
export default mongoose