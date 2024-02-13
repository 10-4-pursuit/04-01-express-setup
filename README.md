
# Exercise: Setting Up Your First Express Server

## Objective
Create a basic Express server that handles two routes: `/` and `/about`. This exercise ranks 1 point worth of difficulty, with an expected work time of an hour.

## Requirements

### Setup an Express Server
- Initialize a new Node.js project with `npm init`.
- Install Express using `npm install express`.
- Create an `index.js` file where your server code will reside.

### Create Routes
- **Route `/`**: Should send back a response with the text: "Welcome to my first Express server!".
- **Route `/about`**: Should send back a JSON response containing an object with a name and an age. [Hint](https://expressjs.com/en/api.html#express.json).

## End Cases
- Server runs without errors on port 3000.
- Navigating to `http://localhost:3000/` displays "Welcome to my first Express server!".
- Navigating to `http://localhost:3000/about` displays a JSON response with a name and age.

## Running the Tests

This exercise includes automated tests to verify the functionality of your Express server using Jest and Supertest.

### Step 1: Install Dependencies
Ensure all project dependencies are installed:
```bash
npm install jest supertest
```

### Step 2: Run the Tests
Execute the tests with the following command:
```bash
npm test
```

### Understanding the Test Output
- **Passing tests** are marked with a green check (✓), indicating your server meets the requirements.
- **Failing tests** are marked with a red cross (✕), with details provided to help you identify and correct the issue.

### Troubleshooting
If you encounter issues:
- Confirm all dependencies are installed with `npm install`.
- Make sure your server exports the Express `app` for testing.
- Review Jest's error messages for insights on needed corrections.
