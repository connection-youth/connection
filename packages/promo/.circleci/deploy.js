const sftp = require('node-sftp-deploy')

async function deploy () {
  await sftp({
    user: process.env.SFTP_USERNAME,
    pass: process.env.SFTP_PASSWORD,
    host: process.env.SFTP_HOST,
    port: 22,
    remotePath: process.env.SFTP_CWD,
    sourcePath: path.resolve(__dirname, '../dist')
  })
}

deploy()
  .then(() => console.log(`Deploy Finished: ${process.env.SFTP_HOST}`))
  .catch(err => console.error(err))
