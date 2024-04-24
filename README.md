Email sender using node.js 


**IMPORTANT**
Email and app password will need to be replaced in orderController.js on line 23

Once database is decided, enable 
loginController, orderController, userController uncomment everything with "pool" in it

**Cannot Load Local Resources Via Puppeteer**
Using third-party libraries like puppeteer uses chromium which does not allow access to local resources,
so loading resources such as images(svg, jpeg, png) will not work unless stored in database.  
You can bypass this by using express.js where you host a static site to host the image and load the image directly from there

Like this, and app is listening on port 8080.

// Serve static files from the 'assets' directory
app.use('/assets', express.static('assets'));

// use it like this
 <img src="http://localhost:8080/assets/logo.svg" alt="Your Company Logo" class="logo">