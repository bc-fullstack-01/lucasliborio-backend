import { Storage } from '@google-cloud/storage'
import { randomUUID } from 'crypto'
import GCPcredentials from '../gcp-cred'
import "dotenv/config"

const bucketName = 'sys-social-storage'
const gc = new Storage({
  credentials:GCPcredentials
})

export const uploadFileOnBucket = async (file: any, profileId: string) => {
  if (!gc.bucket(bucketName)) await gc.createBucket(bucketName)
  const filename = `${profileId}/${randomUUID()}`
  const blob = gc.bucket(bucketName).file(filename).createWriteStream()
  blob.on('error', (err) => { console.log(err) })
  blob.end(file.buffer)
  return filename
}



/* export const uploadFileOnBucket = async (file: any, profileId: string) => {
  const bucketName = 'sysmap-bucket'
  const trimFilename = file.originalname.split('').filter(x => x !== ' ').join('')
  const filename = `${profileId}/${trimFilename}`
  await s3Client.send(new PutObjectCommand({
    Bucket: bucketName, 
    Key: filename,
    ContentType: file.mimetype,
    Body: file.buffer
  }))
  const fileUrl = `/${bucketName}/${filename}`
  return fileUrl
} */
