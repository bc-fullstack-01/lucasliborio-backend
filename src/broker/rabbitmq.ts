import { Channel, connect, Connection} from "amqplib";


export default class RabbitServer {
  private conn: Connection
  private channel: Channel
  
  constructor(private uri: string) { }

   async start(): Promise<void> {
    this.conn = await connect(this.uri)
    this.channel = await this.conn.createChannel()
    await this.createQueue()
    await this.channel.assertExchange('EX_notification', 'direct')
    await this.channel.bindQueue('notification_queue', 'EX_notification', 'bind_notification')
  }

  async createQueue(): Promise<void> {
    await this.channel.assertQueue('notification_queue', { // CRIA UM QUEUE
      durable: false
    })
  }
  async publishInQueue(queue: string, msg: any) {
    return this.channel.sendToQueue(queue, Buffer.from(msg))
  }
  async publishInExchange(message: object): Promise<Boolean> {
    const bufferMessage = Buffer.from(JSON.stringify(message))
    return this.channel.publish('EX_notification', 'bind_notification', bufferMessage) // PUBLICA NA EXCHANGE UTILIZANDO A BIND
  }

  async consumeFromQueue(callback: (msg: any) => void): Promise<void> {
    await this.channel.consume("notification_queue", msg => {
      callback(msg)
      this.channel.ack(msg)
    })
  }
}
