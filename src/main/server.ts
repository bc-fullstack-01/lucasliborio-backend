import { app } from './config/app';
import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost:27017/mydb').then(() => {
  app.listen(4000, () => {
    console.log('server is running on 4000')
  });
}).catch(() => {
  console.log('Mongo não subiu')
})

export default mongoose