import mongoose, { mongo } from 'mongoose';

const connect = mongoose.connect('mongodb://localhost:27017/mydb')

connect.then(() => {
  console.log('deu bom')
})
.catch(() => {
  console.log('deu ruim')
})

export default mongoose