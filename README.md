# Books Web Scraper

A simple web scraper built with Node.js, Express, and MongoDB that scrapes book data from a specified website and stores it in a MongoDB database.

## Features

- Scrapes book titles, prices, and links from the target website.
- Stores scraped data in a MongoDB database.
- API endpoints for retrieving scraped book data.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for building the API.
- **Axios**: For making HTTP requests to the target website.
- **Cheerio**: For parsing and manipulating the HTML.
- **MongoDB**: NoSQL database for storing scraped data.
- **Mongoose**: ODM for MongoDB and Node.js.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (ensure MongoDB is running locally)

### Clone the Repository

```bash
git clone https://github.com/yourusername/books-web-scraper.git
cd books-web-scraper
