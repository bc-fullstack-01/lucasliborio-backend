/* export const config = {
  region: 'us-east-1',
  endpoint: process.env.BUCKET_ENDPOINT,
  forcePathStyle: true,
  sslEnabled: false,
  signatureVersion: 'v4',
  credentials:{
    accessKeyId: process.env.BUCKET_ACCESS_KEY || 'lucasliborio,',
    secretAccessKey: process.env.BUCKET_SECRET_KEY || 'tododiaedia'
  }
} */

import path, { resolve } from "path";

export const config = () => ({
  projectId: "linen-surface-359012",
  keyFileName: path.join(__dirname, 'linen-surface-359012-f1f2216080ec.json')
})