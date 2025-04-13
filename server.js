const express = require('express');
const path = require('path');
const fs = require('fs'); // Add fs for file checking
const app = express();

// Middleware to parse form data (for contact form)
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'about.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('About page not found');
  }
});

app.get('/contact', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'contact.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Contact page not found');
  }
});

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Form submitted: Name=${name}, Email=${email}, Message=${message}`);
  res.redirect('/?success=Message sent!');
});

// 404 for undefined routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});