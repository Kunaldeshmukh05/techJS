const fs = require('fs');

/**
//  * 1. Reading a file asynchronously
//  */
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         // If error occurs (e.g., file not found), handle it here
//         console.error('Error reading file:', err);
//         return;
//     }
//     // Data contains the file content
//     console.log('Async Read:', data);
// });

// /**
//  * 2. Reading a file synchronously
//  */
// try {
//     // Reads file content and returns it, blocks execution until done
//     const data = fs.readFileSync('example.txt', 'utf8');
//     console.log('Sync Read:', data);
// } catch (err) {
//     // Handle error if file doesn't exist or can't be read
//     console.error('Error reading file:', err);
// }

// /**
//  * 3. Writing to a file asynchronously
//  */
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) {
//         // Handle error if writing fails
//         console.error('Error writing file:', err);
//         return;
//     }
//     // File written successfully
//     console.log('Async Write: Success');
// });

// /**
//  * 4. Writing to a file synchronously
//  */
// try {
//     // Writes data to file, blocks execution until done
//     fs.writeFileSync('example.txt', 'Hello, Sync World!');
//     console.log('Sync Write: Success');
// } catch (err) {
//     // Handle error if writing fails
//     console.error('Error writing file:', err);
// }

// /**
//  * 5. Appending data to a file asynchronously
//  */
// fs.appendFile('example.txt', '\nAppended Text', (err) => {
//     if (err) {
//         // Handle error if append fails
//         console.error('Error appending file:', err);
//         return;
//     }
//     // Data appended successfully
//     console.log('Async Append: Success');
// });

// /**
//  * 6. Appending data to a file synchronously
//  */
// try {
//     // Appends data to file, blocks execution until done
//     fs.appendFileSync('example.txt', '\nSync Appended Text');
//     console.log('Sync Append: Success');
// } catch (err) {
//     // Handle error if append fails
//     console.error('Error appending file:', err);
// }

// /**
//  * 7. Deleting a file asynchronously
//  */
// fs.unlink('example.txt', (err) => {
//     if (err) {
//         // Handle error if deletion fails
//         console.error('Error deleting file:', err);
//         return;
//     }
//     // File deleted successfully
//     console.log('Async Delete: Success');
// });

// /**
//  * 8. Deleting a file synchronously
//  */
// try {
//     // Deletes file, blocks execution until done
//     fs.unlinkSync('example.txt');
//     console.log('Sync Delete: Success');
// } catch (err) {
//     // Handle error if deletion fails
//     console.error('Error deleting file:', err);
// }

// /**
//  * 9. Renaming a file asynchronously
//  */
// fs.rename('oldname.txt', 'newname.txt', (err) => {
//     if (err) {
//         // Handle error if rename fails
//         console.error('Error renaming file:', err);
//         return;
//     }
//     // File renamed successfully
//     console.log('Async Rename: Success');
// });

// /**
//  * 10. Renaming a file synchronously
//  */
// try {
//     // Renames file, blocks execution until done
//     fs.renameSync('newname.txt', 'finalname.txt');
//     console.log('Sync Rename: Success');
// } catch (err) {
//     // Handle error if rename fails
//     console.error('Error renaming file:', err);
// }

// /**
//  * 11. Checking if a file exists (synchronously)
//  * Note: fs.existsSync is deprecated for async use, but fine for sync checks.
//  */
// if (fs.existsSync('finalname.txt')) {
//     // File exists
//     console.log('File exists');
// } else {
//     // File does not exist
//     console.log('File does not exist');
// }

// /**
//  * 12. Getting file stats (info) asynchronously
//  */
// fs.stat('finalname.txt', (err, stats) => {
//     if (err) {
//         // Handle error if file doesn't exist
//         console.error('Error getting stats:', err);
//         return;
//     }
//     // stats contains file information (size, created date, etc.)
//     console.log('Async Stats:', stats);
// });

// /**
//  * 13. Getting file stats synchronously
//  */
// try {
//     // Gets file information, blocks execution until done
//     const stats = fs.statSync('finalname.txt');
//     console.log('Sync Stats:', stats);
// } catch (err) {
//     // Handle error if file doesn't exist
//     console.error('Error getting stats:', err);
// }


const os= require('os');

console.log(os.cpus().length); // Returns an array of CPU information

console.log(os.platform()); // Returns the platform of the operating system (e.g., 'linux', 'darwin', 'win32')
console.log(os.arch()); // Returns the architecture of the operating system (e.g., 'x64', 'arm64')
console.log(os.hostname()); // Returns the hostname of the operating system