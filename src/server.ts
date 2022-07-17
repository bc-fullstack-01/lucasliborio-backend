import { app } from './config/app';
import mongoose from 'mongoose'
import RabbitServer from './broker/rabbitmq';

const rabbitBroke = new RabbitServer('amqp://localhost')
mongoose.connect('mongodb://localhost:27017/mydb').then(async () => {

  await rabbitBroke.start().then(() => {
    rabbitBroke.consumeFromQueue(msg => {
      console.log(JSON.parse(msg.content.toString()))
    })
  })
  app.listen(4000, () => {
    console.log('server is running on 4000')
  })
})
.catch(() => {
  console.log('cant reach mongo db, pleas look the logs')
})


export { rabbitBroke }
export default mongoose