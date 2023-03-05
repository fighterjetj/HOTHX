let admin = require("firebase-admin");
const uuid = require('uuid-v4');

// CHANGE: The path to your service account

admin.initializeApp({
    credential: admin.credential.cert("ranker-81139-firebase-adminsdk-chv4a-7e3842b8e9.json"),
    storageBucket: "ranker-81139.appspot.com"
});

let bucket = admin.storage().bucket();

let filename = "C:/Users/Ki/Downloads/Banana-Toast-Recipe-Image-1.jpg"

async function uploadFile() {

  const metadata = {
    metadata: {
      // This line is very important. It's to create a download token.
      firebaseStorageDownloadTokens: uuid()
    },
    contentType: 'image/jpeg',
    cacheControl: 'public, max-age=31536000',
  };

  // Uploads a local file to the bucket
  await bucket.upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    metadata: metadata,
  });

  const url = await file.getSignedUrl({
    action: 'read',
    expires: '03-17-2023'
  });

  const imageUrl = url[0];

// Store the URL in the Realtime Database
const dbRef = admin.database().ref('path/to/image');
dbRef.set({
  url: imageUrl
});

console.log(`${filename} uploaded.`);

}

uploadFile().catch(console.error);