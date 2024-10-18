
# QR Code Generator

A simple JavaScript package to generate QR codes that can output PNG files, Data URLs, and Buffers.

## Installation

You can install the package using npm:

```bash
npm install @bytarch/qrcode
```

## Code

```javascript
const { QRCreation, QR64, QRBuffer } = require('@bytarch/qrcode'); // Use .js extension

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

```

## Usage

### 1. Importing the Package

To use the QR code generator, require it in your JavaScript file:

```javascript
const { QRCreation, QR64, QRBuffer } = require('@bytarch/qrcode');
```

### 2. Generating a QR Code

#### A. Save QR Code as PNG

To generate and save a QR code as a PNG file, use the `QRCreation` function:

```javascript
QRCreation(text, [filename='qrcode.png'], [options={}]);
```

- **Parameters:**
  - `text` (string): The text to encode in the QR code.
  - `filename` (string, optional): The name of the output file (defaults to `'qrcode.png'`).
  - `options` (object, optional): Optional QR code generation settings.

- **Example:**

```javascript
const text = 'https://bytarch.netlify.app!';
QRCreation(text, 'bytarch-qr.png');
```

#### B. Generate QR Code as a Data URL

To generate a QR code as a Data URL (suitable for embedding in HTML or displaying as an image), use the `QR64` function:

```javascript
QR64(text, [options={}]);
```

- **Parameters:**
  - `text` (string): The text to encode in the QR code.
  - `options` (object, optional): Optional QR code generation settings.

- **Returns:** A Promise that resolves to a string containing the Data URL of the generated QR code.

- **Example:**

```javascript
const dataUrl = await QR64('https://bytarch.netlify.app!');
console.log(dataUrl); // Outputs the Data URL of the QR code
```

#### C. Generate QR Code as a Buffer

To generate a QR code as a Buffer (for file writing or other manipulation), use the `QRBuffer` function:

```javascript
QRBuffer(text, [options={}]);
```

- **Parameters:**
  - `text` (string): The text to encode in the QR code.
  - `options` (object, optional): Optional QR code generation settings.

- **Returns:** A Promise that resolves to a Buffer containing the generated QR code image.

- **Example:**

```javascript
const buffer = await QRBuffer('https://bytarch.netlify.app!');
// You can now manipulate the buffer, save it to a file, etc.
```

## Helper Functions

### 1. ensurePngExtension

Ensures that the provided filename has a `.png` extension. This function is used internally in the `QRCreation` function.

```javascript
const ensurePngExtension = (filename) => filename.endsWith('.png') ? filename : `${filename}.png`;
```

- **Parameters:**
  - `filename` (string): The filename to check.

- **Returns:** The filename with a `.png` extension if necessary.

## Error Handling

Each function includes basic error handling that logs any errors encountered during QR code generation to the console. You can further enhance error handling as needed in your application.

## Example

Here’s an example of generating a QR code and saving it as a PNG file:

```javascript
const { QRCreation } = require('@bytarch/qrcode');

const text = 'Visit bytarch!';
QRCreation(text, 'bytarch-qr.png');
```

This will create a QR code that encodes the text "Visit bytarch!" and saves it as `bytarch-qr.png`.



## GitHub Repository

You can find the source code for this package on GitHub:

[GitHub - QR Code Generator](https://github.com/bytarch/qrcode)

Feel free to contribute or raise issues on the repository.
