/** this library of nodemailer will help us send emails to users like invoice */

import nodemailer from "nodemailer";
import fs from 'fs';

const sendInvoiceToEmail = (email, appPassword, recipientEmail, orderDetails) => {


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

     // invoice details and content
     const invoiceContent = 
     `
     <!DOCTYPE html>
     <html>
     <head>
     <title>Invoice</title>
     <style>
         /* Style for the invoice */
         body {
         font-family: Arial, sans-serif;
         line-height: 1.6;
         margin: 0;
         padding: 20px;
         }
         .invoice-container {
         max-width: 600px;
         margin: 0 auto;
         border: 1px solid #ccc;
         padding: 20px;
         }
         .section-title {
         font-weight: bold;
         margin-bottom: 10px;
         }
         .client-info {
         margin-bottom: 20px;
         }
         .product-details, .total-details {
         margin-bottom: 20px;
         }
         .solid-line {
         border-top: 1px solid #ccc;
         margin: 20px 0;
         }
         .payment-info, .additional-info {
         margin-bottom: 20px;
         }
         .price {
         float: right;
         }
     </style>
     </head>
     <body>
     <div class="invoice-container">
         <div class="client-info">
         <div class="section-title">Your Contact Info:</div>
         <div>${orderDetails.businessName}</div>
         <div>${orderDetails.firstName} ${orderDetails.lastName}</div>
         <div>${orderDetails.email}</div>
         <div>${orderDetails.phone}</div>
         </div>
 
         <div class="solid-line"></div>
 
         <div class="product-details">
         <div class="section-title">Product:</div>
         <div>
             <div>Type: ${orderDetails.topType}</div>
             <div>Size: ${orderDetails.topSize}</div>
             <div>Color: ${orderDetails.topColorName}</div>
             <div>Print Area: ${orderDetails.topPrintArea}</div>
             <div>Qty: ${orderDetails.topQty}</div>
             <div>Due Date: ${orderDetails.deliveryDateRequest}</div>
         </div>
         </div>
 
         <div class="solid-line"></div>
 
         <div class="total-details">
         <div class="section-title">Grand Total:</div>
         <div>
             <div>Qty Cost: <span class="price">$${orderDetails.qtyCost}</span></div>
             <div>Print Area Cost: <span class="price">$${orderDetails.printAreaCost}</span></div>
             <div>Subtotal: <span class="price">$${orderDetails.subtotal}</span></div>
             <div>Tax: <span class="price">$${orderDetails.tax}</span></div>
             <div>Total: <span class="price">$${orderDetails.totalCost}</span></div>
         </div>
         </div>
 
         <div class="payment-info">
         <div class="section-title">Accepted Payments:</div>
         <ul>
             <li>Paypal</li>
             <li>All major credit cards</li>
             <li>Cash</li>
         </ul>
         </div>
 
         <div class="additional-info">
         <div class="section-title">Additional Information:</div>
         <div>Depending on the amount ordered, 50% or 100% of the total will be required before the order is processed at the warehouse.</div>
         </div>
 
     </div>
     </body>
     </html>
      `;


    /* THIS IS FOR PDF INVOICE SENDING
    // email options
    const mailOptions = {
        from: email,
        to: recipientEmail,
        subject: 'Your Invoice',
        attachments: [
            {
                filename: 'invoice.pdf',
                content: orderDetails.buffer, // Use req.file.buffer directly
                encoding: 'base64',
                contentType: 'application/pdf',
            }
        ]
    }
    */

    // email options
    const mailOptions = {
        from: email,
        to: recipientEmail,
        subject: 'Your Invoice',
        attachments: [
            {
                filename: 'invoice.pdf',
                content: invoiceContent,
                encoding: 'base64',
                contentType: 'application/pdf',
            }
        ]
    }


    transporter.sendMail(mailOptions)
        .then(info => {
            console.log('Email sent:', info.response);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
}





export default {sendInvoiceToEmail};