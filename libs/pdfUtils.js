//TODO: Find a right way to convert html to pdf and call it in the nodeMailer
// generatePDF.js
// generatePDF.js
import puppeteer from 'puppeteer';

async function generatePDF(htmlContent, puppeteerOptions = {}) {
    // Launch Puppeteer browser with provided options
    const browser = await puppeteer.launch(puppeteerOptions);

    // Create a new page
    const page = await browser.newPage();

    // Set HTML content on the page
    await page.setContent(htmlContent);

    // Generate PDF
    const pdfBuffer = await page.pdf({ format: 'A4' }); // Adjust format as needed

    // Close the browser
    await browser.close();

    return pdfBuffer;
}

export default {generatePDF};
