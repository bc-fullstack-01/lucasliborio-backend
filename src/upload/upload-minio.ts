import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { config } from '../config/minio'

const s3Client = new S3Client(config)
export const uploadFileOnBucket = async (file: any, profileId: string) => {
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
}
