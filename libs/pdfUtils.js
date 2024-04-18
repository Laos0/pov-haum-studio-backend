import pdf from 'html-pdf'; // Importing the 'html-pdf' module for HTML to PDF conversion

// Function to convert HTML to PDF using html-pdf
const convertHtmlToPdf = async (htmlContent) => { // Declaring an asynchronous function to convert HTML to PDF
    return new Promise((resolve, reject) => { // Creating a promise for asynchronous PDF generation
        pdf.create(htmlContent).toBuffer((err, buffer) => { // Using html-pdf to create PDF from HTML content and convert it to a buffer
            if (err) { // If an error occurs during PDF generation
                reject(err); // Rejecting the promise with the error
            } else { // If PDF generation is successful
                resolve(buffer); // Resolving the promise with the PDF buffer
            }
        });
    });
};

export default { convertHtmlToPdf }; // Exporting the convertHtmlToPdf function as default
