import { Channel, connect, Connection } from "amqplib";


export default class RabbitServer {
  private conn: Connection
  private channel: Channel
  
  constructor(private uri: string) { }

   async start(): Promise<void> {
    this.conn = await connect(this.uri)
    this.channel = await this.conn.createChannel()
  }

  async createQueue(queue: string): Promise<void> {
    await this.channel.assertQueue('notification_queue', { // CRIA UM QUEUE
      durable: true
    })

  }
  async publishInQueue(queue: string, msg: any) {
    return this.channel.sendToQueue(queue, Buffer.from(msg))
  }

  async publishInExchange(exchangeName?: string, routingKey?: string, message?: string): Promise<Boolean> {
    await this.channel.assertExchange('EX_notification', 'direct') // CRIA A EXCHANGE 
    await this.channel.bindQueue('notification_queue', 'EX_notification', 'bind_notification') // CRIA O BIND DA QUEUE COM A EXCHANGE
    return this.channel.publish('EX_notification', 'bind_notification', Buffer.from(message)) // PUBLICA NA EXCHANGE UTILIZANDO A BIND
  }

  async consumeFromQueue(queue: string, callback: (msg: any) => void): Promise<void> {
    this.channel.consume("notification_queue", received => {
      console.log(received)
      callback(received)
      this.channel.ack(received)
    })
  }
}
