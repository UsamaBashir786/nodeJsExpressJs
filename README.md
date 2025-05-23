# Node.js + Express.js Blog Project

This is a simple web application built with **Node.js**, **Express.js**, **HTML**, **CSS**, and **Bootstrap 5**. It serves static HTML pages for a basic blog-like website with Home, About, and Contact pages. The project demonstrates how to use Node.js and Express.js to create a server, serve static files, and handle basic server-side logic (e.g., form submissions).

## Project Overview

The project consists of a web server that serves static HTML pages from the `public/` directory. It includes:
- **Home Page** (`index.html`): A landing page styled with Bootstrap.
- **About Page** (`about.html`): A page with information about the app.
- **Contact Page** (`contact.html`): A page with a form to submit messages (logs to the console for now).
- **Custom CSS** (`style.css`): Additional styling on top of Bootstrap.
- **Server** (`server.js`): A Node.js/Express.js server to handle routing and form submissions.

### Tech Stack
- **Node.js**: Runtime for running JavaScript on the server.
- **Express.js**: Framework for creating the server, handling routes, and serving static files.
- **HTML/CSS**: For structuring and styling the front-end pages.
- **Bootstrap 5**: For responsive design and pre-built components (e.g., navbar, forms).

## Project Structure
```
BLOG/
├── node_modules/           # Dependencies installed via npm
├── public/                 # Static files served by Express
│   ├── css/                # Custom CSS
│   │   └── style.css
│   ├── js/                 # Empty folder for future JavaScript (optional)
│   ├── about.html          # About page
│   ├── contact.html        # Contact page with a form
│   └── index.html          # Home page
├── package-lock.json       # Lock file for npm dependencies
├── package.json            # Project metadata and dependencies
├── README.md               # This file
└── server.js               # Main server file
```

## Prerequisites
- **Node.js**: Ensure Node.js is installed (download from [nodejs.org](https://nodejs.org)).
  - Check with: `node -v` and `npm -v`.
- **Text Editor**: Use VS Code or any editor of your choice.

## Setup Instructions

1. **Clone or Download the Project**:
   - If using Git, clone the repository:
     ```bash
     git clone <repository-url>
     cd BLOG
     ```
   - Otherwise, download and extract the project folder.

2. **Install Dependencies**:
   - Navigate to the project directory and install required packages:
     ```bash
     npm install
     ```
   - This installs **Express.js** and any other dependencies listed in `package.json`.

3. **Run the Project**:
   You can run the server in two ways:

   ### Standard Server Run
   For basic testing or production:
   ```bash
   node server.js
   ```
   - Starts the server on `http://localhost:3000`.
   - Requires manual restart after code changes.

   ### Development Mode with Nodemon
   For development with automatic reloading:
   ```bash
   # Install Nodemon globally (if not already installed)
   npm install -g nodemon

   # Run the project
   nodemon server.js
   ```
   - Automatically restarts the server on file changes.
   - Ideal for development to see changes instantly.

4. **Access the Website**:
   - Open your browser and visit:
     - `http://localhost:3000/` (Home page)
     - `http://localhost:3000/about` (About page)
     - `http://localhost:3000/contact` (Contact page)

## Features
- **Static Pages**: Serves `index.html`, `about.html`, and `contact.html` with a consistent Bootstrap navbar.
- **Form Handling**: The Contact page has a form that submits data to the server (logs to the console).
- **Custom Styling**: Uses Bootstrap 5 for responsive design, with additional styles in `style.css`.

## Key Benefits of Tools Used

### Node.js
- **Purpose**: Runs JavaScript on the server to create a web server.
- **In This Project**: Executes `server.js` to handle HTTP requests and serve pages.

### Express.js
- **Purpose**: Simplifies server creation, routing, and HTTP request handling.
- **In This Project**:
  - Creates a server to listen on port 3000.
  - Serves static files from the `public/` folder.
  - Handles routes (`/`, `/about`, `/contact`) to render HTML pages.
  - Processes form submissions (POST `/contact`).

### Nodemon
- **Purpose**: Enhances development by auto-restarting the server.
- **Benefits**:
  - Watches for file changes (e.g., `server.js`, HTML, CSS).
  - Automatically restarts the server, saving time.
  - Supports both JavaScript and TypeScript projects.

## Quick Setup Tips
1. Install Nodemon globally: `npm install -g nodemon`.
2. Use `nodemon server.js` during development for auto-reloading.
3. Use `node server.js` for production or final testing.

## Future Improvements
- **Dynamic Navbar**: Use a template engine (e.g., EJS) or client-side JavaScript to avoid duplicating the navbar in each HTML file.
- **Database Integration**: Store contact form submissions in a database (e.g., MongoDB).
- **API Development**: Add REST API endpoints for a future front-end framework like React.
- **Error Handling**: Improve 404 handling by serving a custom `404.html` page.

## Learning Goals
This project helps you learn:
- Setting up a Node.js/Express.js server.
- Serving static HTML pages with Express.js.
- Handling HTTP requests (GET for pages, POST for forms).
- Using Bootstrap 5 for responsive design.

## Troubleshooting
- **Cannot GET Errors**: Ensure `about.html` and `contact.html` exist in `public/`. Check file names for typos or case sensitivity.
- **CSS Not Loading**: Verify the path `/css/style.css` in your HTML matches the file location.
- **Form Not Submitting**: Confirm `express.urlencoded` middleware is in `server.js` to parse form data.

## Contributing
Feel free to fork this project, make improvements, and submit pull requests. This is a learning project, so suggestions for better practices are welcome!

## License
This project is for educational purposes and has no specific license.
