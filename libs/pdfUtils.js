import puppeteer from 'puppeteer'; // Importing the 'puppeteer' module for PDF generation

// Function to convert HTML to PDF using Puppeteer
const convertHtmlToPdf = async (htmlContent) => {
    const browser = await puppeteer.launch(); // Launching a headless Chromium browser instance
    const page = await browser.newPage(); // Creating a new page in the browser

    // Setting content of the page to the provided HTML content
    await page.setContent(htmlContent);

    // Generating PDF from the page content
    const pdfBuffer = await page.pdf({ format: 'A4' }); // Optionally, you can specify the PDF format here

    await browser.close(); // Closing the browser instance

    return pdfBuffer; // Returning the PDF buffer
};

export default { convertHtmlToPdf }; // Exporting the convertHtmlToPdf function as default
