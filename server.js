const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware to parse form data (for contact form)
app.use(express.urlencoded({ extended: true }));

// Debugging middleware
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.path}`);
  next();
});

// Serve static files with logging
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    console.log(`Serving static file: ${filePath}`);
  }
}));

// Routes with detailed logging
app.get('/', (req, res) => {
  console.log('Serving index.html');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'about.html');
  console.log(`Attempting to serve about page: ${filePath}`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    console.error('About page file not found');
    res.status(404).send('About page not found');
  }
});

app.get('/contact', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'contact.html');
  console.log(`Attempting to serve contact page: ${filePath}`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    console.error('Contact page file not found');
    res.status(404).send('Contact page not found');
  }
});

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Form submitted: Name=${name}, Email=${email}, Message=${message}`);
  res.redirect('/?success=Message sent!');
});

// 404 for undefined routes with logging
app.use((req, res) => {
  console.log(`404: Page not found - ${req.path}`);
  res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Serving files from: ${path.join(__dirname, 'public')}`);
});