const express = require('express');        // Importing express library for creating the server
const fs = require('fs');                  // Importing 'fs' (file system) module to work with files
const zlib = require('zlib');              // Importing 'zlib' module for compression (gzip in this case)
const statusMonitor = require('express-status-monitor');  // Importing express-status-monitor for server status monitoring
const app = express();                    // Initializing express app
const PORT = 8000;                         // Defining the port number for the server

app.use(statusMonitor());                  // Enabling status monitoring middleware on the server

// Stream the file 'file_sample.txt', compress it using gzip, and write to 'file_sample.zip'
fs.createReadStream('file_sample.txt')      // Read the file 'file_sample.txt' as a stream
  .pipe(zlib.createGzip())                   // Pipe the stream through the Gzip compression
  .pipe(fs.createWriteStream("file_sample.zip"));  // Write the compressed output to 'file_sample.zip'

// Endpoint to serve the file content when accessing the root URL
app.get('/', (req, res) => {
  const stream = fs.createReadStream("file_sample.txt", "utf-8");   // Create a readable stream from 'file_sample.txt'
  stream.on("data", (chunk) => res.write(chunk));  // Write each chunk of data to the response as it's read
  stream.on('end', () => res.end());               // End the response when the file stream finishes
});

// Starting the server and listening on the defined port
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);  // Log the server start message with the URL
});
