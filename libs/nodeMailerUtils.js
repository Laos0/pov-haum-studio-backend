/** this library of nodemailer will help us send emails to users like invoice */

import nodemailer from "nodemailer";
import pdfUtils from "./pdfUtils.js";
import {JSDOM} from "jsdom";
import fs from "fs";
import path from "path";

const sendInvoiceToEmail = async (email, appPassword, recipientEmail, orderDetails) => {


    // create a nodemailer transporter using SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: email,
            pass: appPassword // this has to be an App password generated from gmail or hotmail .etc, not your actual gmail's password
        }
    });

    /****** CONVERT SVG to base64 */

    // Get the directory name of the current module file
    const __dirname = path.dirname(new URL(import.meta.url).pathname);

    // Read the SVG file using an absolute path
    const svgContent = fs.readFileSync(path.join(__dirname, '../assets/logo.svg'), 'utf-8');

    // Convert the SVG content to a Buffer
    const svgBuffer = Buffer.from(svgContent, 'utf-8');

    // Base64 encode the Buffer
    const base64EncodedSVG = svgBuffer.toString('base64');

    //******* End for converting svg to base64 */

    // invoice details and content
    const invoiceContent = 
     `
     <!DOCTYPE html>
<html>
<head>
<title>Pov Haum Studio Invoice</title>
<style>
    /* Global styles */
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        background-color: #f2f2f2;
    }

    /* Container styles */
    .invoice-container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    /* Header styles */
    .header {
        background-color: #333;
        color: #fff;
        padding: 15px;
        border-radius: 10px 10px 0 0;
        text-align: center;
    }

    /* Title styles */
    .title {
        margin: 0;
        font-size: 24px;
    }

    /* Client info styles */
    .client-info {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 20px;
        border-bottom: 1px solid #ccc;
    }

    /* Contact info styles */
    .contact-info {
        flex-grow: 1;
        margin-right: 20px;
    }

    /* Client address styles */
    .client-address {
        flex-grow: 1;
        text-align: right;
    }

    /* Section title styles */
    .section-title {
        font-weight: bold;
        margin-bottom: 10px;
        color: #333;
    }

    /* Product and Delivery section wrapper */
    .product-delivery-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    /* Product details styles */
    .product-details,
    .delivery-details,
    .total-details,
    .payment-info,
    .additional-info {
        width: calc(50% - 20px);
        margin-bottom: 20px;
    }

    /* Footer styles */
    .footer {
        background-color: #333;
        color: #fff;
        padding: 15px;
        border-radius: 0 0 10px 10px;
        text-align: center;
    }

    /* Price styles */
    .price {
        font-weight: bold;
        color: #008cba;
    }

    /* Accepted payments styles */
    .payment-info ul {
        list-style-type: disc; /* Add bullets */
        padding: 0;
        margin-left: 20px; /* Align with the section title */
        font-size: 14px;
    }

    /* Additional information styles */
  
    .additional-info {
        display: flex;
        flex-direction: column;
        width: 100%; /* Ensure the container takes up the full width */
    }
    
    .additional-info p {
        margin: 0; /* Remove default margin */
    }

    /* Logo styles */
    .logo {
        display: block;
        margin: 0 auto;
        width: 200px;
    }

    .total-details {
        width: 100%;
        margin-bottom: 20px;
    }
    
    .total-details .pricing-details {
        width: 100%;
    }
</style>
</head>
<body>
<div class="invoice-container">
    <div class="header">
        <img src="data:image/svg+xml;base64, ${base64EncodedSVG}" class="logo">
        <h1 class="title">Pov Haum Studio Invoice</h1>
    </div>
    <div class="client-info">
        <div class="contact-info">
            <div>${orderDetails.firstName} ${orderDetails.lastName}</div>
            <div>${orderDetails.email}</div>
            <div>${orderDetails.phone}</div>
        </div>
        <div class="client-address">
            <address>
                ${orderDetails.iAddress.street}, ${orderDetails.iAddress.apt ? `Apt ${orderDetails.iAddress.apt}<br>` : ''}
                ${!orderDetails.iAddress.apt ? `${orderDetails.iAddress.city}, ${orderDetails.iAddress.state} ${orderDetails.iAddress.zip}<br>` : ''}
                <!-- Display city, state, and zip code regardless of apt existence -->
                ${orderDetails.iAddress.city ? `${orderDetails.iAddress.city},` : ''} 
                ${orderDetails.iAddress.state ? `${orderDetails.iAddress.state} ${orderDetails.iAddress.zip}<br>` : ''}
            </address>
        </div>
    </div>
    
    <div class="product-delivery-wrapper">
        <div class="product-details">
            <div class="section-title">Products:</div>
            <div>
                <div>Shirt Color: ${orderDetails.topBaseColorName}</div>
                <div class='sizeQtyContainer'></div>
                <div>Total Qtys: ${orderDetails.totalQty}</div>
                <div class='areaColorsContainer'></div>
            </div>
        </div>

        <div class="delivery-details">
            <div class="section-title">Delivery:</div>
            <div>Rush: ${orderDetails.rushOrder ? 'yes' : 'no'}</div>
            <div>Delivery Type: ${orderDetails.deliveryType}</div>
            <div>Shipping: ${orderDetails.shippingType}</div>
            <div>Delivery Requested Date: ${orderDetails.deliveryDateRequest}</div>
        </div>
    </div>
    
    <div class="total-details">
        <div class="section-title">Pricing:</div>
        <div class="pricing-details">
            <strike>Total Unit Cost: ${orderDetails.totalQty} x $${orderDetails.icost.avgUnitCost.toFixed(2)} = $${orderDetails.icost.itemCostTotal.toFixed(2)}</strike>
            ${orderDetails.icost.bulkDiscountPercent !== 0 ? `<div>Volume Discount and Savings: ${Math.round(orderDetails.icost.bulkDiscountPercent * 100)}%, $${orderDetails.icost.bulkDiscountSavings.toFixed(2)}</div>` : ''}
            <div>Total Unit Cost: ${orderDetails.totalQty} x $${orderDetails.icost.avgUnitCostWithBulkDiscount.toFixed(2)} = $${orderDetails.icost.itemCostTotalWithBulkDiscount.toFixed(2)}</div>
            ${orderDetails.icost.totalPromoDiscountsPercent !== 0 ? `<div>Promo Discounts and Savings: ${Math.round(orderDetails.icost.totalPromoDiscountsPercent * 100)}%, $${orderDetails.icost.itemCostTotalWithPromoDiscountSavings.toFixed(2)}</div>` : ''}
            ${orderDetails.icost.spotColorSetupFee !== 0 ? `<div> Spot Color Setup Fee: $${orderDetails.icost.spotColorSetupFee.toFixed(2)} </div>` : ''}
            ${orderDetails.icost.rushOrderCost !== 0 ? `<div> Rush Order Fee: $${orderDetails.icost.rushOrderCost.toFixed(2)} </div>` : ''}
            <div>Subtotal: $${orderDetails.icost.subTotal.toFixed(2)}</div>
            <div>Tax: $${orderDetails.icost.totalTax.toFixed(2)}</div>
            <div>Grand Total: <span class="price">$${orderDetails.icost.total.toFixed(2)}</span></div>
        </div>
    </div>

    <div class="payment-info">
        <div class="section-title">Accepted Payments:</div>
        <ul>
            <li>PayPal | Zelle | Venmo | Meta Pay</li>
            <li>All major credit cards</li>
            <li>Cash</li>
        </ul>
    </div>

    <div class="additional-info">
        <div class="section-title">Additional Information:</div>
        <p>Depending on the amount ordered, 50% or 100% of the total will be required before the order is processed at the warehouse.</p>
    </div>

    <div class="footer">
        <p>Thank you for your business!</p>
    </div>
</div>
</body>
</html>

`;
    
    // Parse HTML content using JSDOM
const dom = new JSDOM(invoiceContent);
const htmlDoc = dom.window.document;

// Finding the container where you want to display the size quantities in the HTML (invoiceContent)
const sizeQtyContainer = htmlDoc.querySelector('.sizeQtyContainer');
const areaColorsContainer = htmlDoc.querySelector('.areaColorsContainer');

// Iterate over each ISizeQty object in the iSizeQty array
orderDetails.iSizeQty.forEach(sizeQty => {
    // create a div for each of the sizeQty
    const sizeQtyDiv = htmlDoc.createElement('div');
    sizeQtyDiv.textContent = `Size: ${sizeQty.sizeType}, ${sizeQty.qty}`;

    // append the div element to the container
    sizeQtyContainer.appendChild(sizeQtyDiv);
});

// iterate over each areaColors object in the areaColors array
orderDetails.areaColors.forEach(areaColor => {
    // create a div for each of the areaColorDiv
    const areaColorDiv = htmlDoc.createElement('div');
    areaColorDiv.textContent = `Print Area: ${areaColor.printAreaType}, ${areaColor.colorAppQty.colorAppType}, ${areaColor.colorAppQty.qty}`;

    // append the div element to the container
    areaColorsContainer.appendChild(areaColorDiv);
});

// Convert the modified DOM object back to an HTML string
const modifiedInvoiceContent = htmlDoc.documentElement.outerHTML;

    (async () => {
        try {
            // Generate PDF using Puppeteer with configuration options
            const pdfBuffer = await pdfUtils.generatePDF(modifiedInvoiceContent, {
                args: ['--allow-file-access-from-files']
            });
    
            // Now you have the PDF buffer, you can send it via email or save it to disk
            // For example, you can send it via nodemailer
            const mailOptions = {
                from: email,
                to: recipientEmail,
                subject: 'Pov Haum Studio Invoice: ' + orderDetails.orderId,
                attachments: [
                    {
                        filename: 'pov-haum-studio-invoice.pdf',
                        content: pdfBuffer, // Convert PDF buffer to base64 string
                        contentType: 'application/pdf',
                    }
                ]
            };
        
            // server lets us know when an email was sent or not
            transporter.sendMail(mailOptions)
                .then(info => {
                    console.log('Email sent:', info.response);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
    
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    })();
        
    

    /*
    // email options for html
    const mailOptions = {
        from: email,
        to: recipientEmail,
        subject: 'Povhaum Studio Invoice: ' + orderDetails.orderId,
        html: invoiceContent
    }
    */

    
}


export default {sendInvoiceToEmail};