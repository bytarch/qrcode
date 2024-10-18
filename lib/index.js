const QRCode = require('qrcode');

/**
 * Ensures the filename has a .png extension if none is provided.
 * @param {string} filename - The filename to check.
 * @returns {string} - The filename with a .png extension if necessary.
 */
const ensurePngExtension = (filename) => filename.endsWith('.png') ? filename : `${filename}.png`;

/**
 * Generates and saves a QR code (defaults to PNG format).
 * @param {string} text - The text to encode in the QR code.
 * @param {string} [filename='qrcode.png'] - The name of the output file (defaults to 'qrcode.png').
 * @param {object} [options={}] - Optional QR code generation settings.
 */
const QRCreation = async (text, filename = 'qrcode.png', options = {}) => {
    try {
        const finalFilename = ensurePngExtension(filename);
        await QRCode.toFile(finalFilename, text, { width: 300, ...options });
        console.log(`QR Code saved as ${finalFilename}`);
    } catch (err) {
        console.error('Error generating QR Code:', err);
    }
};

/**
 * Generates a QR code as a Data URL (for embedding in HTML or display as an image).
 * @param {string} text - The text to encode in the QR code.
 * @param {object} [options={}] - Optional QR code generation settings.
 * @returns {Promise<string>} - Data URL of the generated QR code.
 */
const QR64 = async (text, options = {}) => {
    try {
        return await QRCode.toDataURL(text, options);
    } catch (err) {
        console.error('Error generating QR Code Data URL:', err);
    }
};

/**
 * Generates a QR code as a Buffer (for file writing or other manipulation).
 * @param {string} text - The text to encode in the QR code.
 * @param {object} [options={}] - Optional QR code generation settings.
 * @returns {Promise<Buffer>} - Buffer containing the generated QR code image.
 */
const QRBuffer = async (text, options = {}) => {
    try {
        return await QRCode.toBuffer(text, options);
    } catch (err) {
        console.error('Error generating QR Code Buffer:', err);
    }
};

module.exports = {
    QRCreation,
    QR64,
    QRBuffer,
};
