# Dominguez Property Website

Welcome to the Dominguez Property Website repository! This project involves developing a custom website for Dominguez Property using modern web technologies to enhance performance, maintainability, and scalability. The website was created to replace the existing platform and provide a better user experience and operational efficiency.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The Dominguez Property website was built to deliver a faster and more reliable online presence. Leveraging the power of Next.js, Tailwind CSS, and TypeScript, the new site replaces the previous WordPress-based solution, resulting in significant performance improvements, enhanced maintainability, and better scalability.

## Features

- **High Performance:** Utilizes Next.js's server-side rendering and optimized static generation for fast page loads.
- **Improved SEO:** SEO-friendly architecture using Next.js's built-in optimization features.
- **Enhanced Maintainability:** Streamlined styling with Tailwind CSS and modular design for easy updates.
- **Scalable Backend:** MongoDB integration with Prisma for efficient data management and retrieval.
- **Modern Development Practices:** Built with TypeScript for better type safety and maintainable code.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **MongoDB**: A NoSQL database for storing and managing data.
- **Prisma**: An ORM for seamless database integration and query optimization.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/OctavioWebDev/dominguezprop.git
    cd dominguezprop
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add your environment variables (e.g., database connection strings).

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. **Open your browser:**

    Navigate to `http://localhost:3000` to view the website.

## Usage

This project is intended to serve as the main website for Dominguez Property. It can be used to showcase property listings, provide company information, and allow users to contact the company directly.

## Project Structure

```
dominguezprop/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Next.js pages
│   ├── styles/      # Global styles
│   ├── utils/       # Utility functions
│   ├── prisma/      # Prisma schema and configuration
│   └── types/       # TypeScript types
├── .env.example     # Example environment variables file
├── next.config.js   # Next.js configuration file
├── package.json     # NPM scripts and dependencies
└── README.md        # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a new Pull Request

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please contact Octavio Sanchez at [octaviosanchez@example.com](mailto:octaviosanchez@example.com).

---

Thank you for checking out the Dominguez Property Website repository! We hope you find this project useful and informative.
