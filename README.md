# Personality Test

A web application for assessing users' personalities through a series of engaging questions.

## Description

This project is a personality test application built using React for the frontend and Node.js for the backend. It allows users to answer questions and receive insights about their personality types.

## Installation

Clone the repository:

```bash
git clone https://github.com/Ruda-Mafra/Personality-Test.git
```

Install the dependencies:

```bash
cd Personality-Test/API
npm install
```

Then install the frontend dependencies:

```bash
cd Personality-Test/CLIENT
npm install
```

### Running the App

#### Backend

To run the backend application, use:

```bash
cd Personality-Test/API
npm run server
```

#### Frontend

To run the frontend application, use:

```bash
cd Personality-Test/CLIENT
npm run dev
```

**Default Port:** 3000

## Environment Variables

You can find and modify the necessary environment variables in the .env file.


### Example Variables

```plaintext
PORT=3000
MONGOOSEDB_URL="your-mongodb-connection-string"
USE_IN_MEMORY_DB=true
```

Ensure to set up your database connection string appropriately.

## Database

This application utilizes MongoDB for data storage. The database is automatically seeded with initial data whenever the backend server starts, so manual population is not required.

If you need to reset the data, simply restart the backend, and it will clear and repopulate the database with the initial data defined in the project.

> **Note:** To run this application, you must set up your own MongoDB instance. You can create a free cluster using MongoDB Atlas or run MongoDB locally. Ensure to replace your-mongodb-connection-string with your actual connection string.



## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.
