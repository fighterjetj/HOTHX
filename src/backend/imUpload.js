let admin = require("firebase-admin");
const uuid = require('uuid-v4');
const readline = require('readline');
const fs = require('fs');

// CHANGE: The path to your service account

admin.initializeApp({
    credential: admin.credential.cert("ranker-81139-firebase-adminsdk-chv4a-7e3842b8e9.json"),
    storageBucket: "ranker-81139.appspot.com"
});

let bucket = admin.storage().bucket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter the path to the JPEG file to upload: ', async function (filename) {

    // Check if the file exists
    if (!fs.existsSync(filename)) {
      console.log(`File not found: ${filename}`);
      rl.close();
      return;
    }
  
    const metadata = {
      metadata: {
        // This line is very important. It's to create a download token.
        firebaseStorageDownloadTokens: uuid()
      },
      contentType: 'image/jpeg',
      cacheControl: 'public, max-age=31536000',
    };
  
    // Upload the file to the bucket
    await bucket.upload(filename, {
      // Support for HTTP requests made with `Accept-Encoding: gzip`
      gzip: true,
      metadata: metadata,
    });
  
    console.log(`${filename} uploaded.`);
  
    rl.close();
  
  });