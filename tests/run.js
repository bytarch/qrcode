const { QRCreation, QR64, QRBuffer } = require('../lib/index'); // Use .js extension

// Generate a QR code and save it as a PNG file
QRCreation('HELLO WORLD', 'generated_code.png'); // Added .png extension to the filename

// Generate a QR code as a data URL
QR64('HELLO WORLD')
    .then(url => {
        console.log('QR Code Data URL:', url);
    })
    .catch(err => {
        console.error('Error generating QR Code Data URL:', err);
    }); // Added error handling

// Generate a QR code as a buffer
QRBuffer('HELLO WORLD')
    .then(buffer => {
        if (buffer) { // Check if buffer is defined
            // Save the buffer as a file (this part is removed)
            console.log('QR Code buffer generated but not saved.');
        } else {
            console.error('No buffer returned for QR Code');
        }
    })
    .catch(err => {
        console.error('Error generating QR Code Buffer:', err);
    }); // Added error handling
