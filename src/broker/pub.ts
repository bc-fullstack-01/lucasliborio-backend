import { rabbitBroke } from "../server"

export const publishEvent = async (event:string, keys: any[], message: any ) => {
  const msg = {
    event,
    payload:message,
    keys,
  }
  rabbitBroke.publishInExchange(msg).then((bool) => {
    if (bool) console.log('message send')
    else console.log('message not send')
  })
}

