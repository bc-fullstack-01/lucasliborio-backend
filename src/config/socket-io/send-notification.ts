export const sendNotification = (msg: any, socketOnline: any) => {
  console.log('message',msg)
  Object.entries(Object.fromEntries(socketOnline.sockets))
  .filter(([k, v]) => msg.keys.includes(v.profile._id.toString()))
  .map(([k, v]) => v.emit(msg.event, msg.payload))
}