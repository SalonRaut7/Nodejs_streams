# Express File Compression Server

This project sets up a simple Express server that performs two tasks:
1. Compresses a file (`file_sample.txt`) into a Gzip format (`file_sample.zip`).
2. Serves the content of `file_sample.txt` via HTTP when the root URL is accessed.

## Features
- **File Compression:** Uses the `zlib` module to compress a text file (`file_sample.txt`) into a `.zip` format.
- **File Streaming:** Streams the content of the text file to the client when accessed via HTTP GET request.
- **Server Status Monitoring:** Integrates `express-status-monitor` to track server performance and statistics.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (Node package manager)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/express-file-compression.git
   cd Nodejs_streams
   ```

