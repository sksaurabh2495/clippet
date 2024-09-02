# React JS User Authentication and Movie Display Application

## Project Overview

This project is a React JS web application that provides a user authentication system and displays a list of Kannada movies fetched from an external API. The application features a responsive user interface, advanced styling using CSS, and modular, reusable components.

## Features

- **User Signup**: 
  - Users can register by providing their Name, Password, Email, Phone number, and Profession.
  - User data is stored locally in the browser's local storage.

- **User Login**:
  - Registered users can log in with their credentials.
  - The application verifies the credentials and displays an error message for invalid logins.

- **Dashboard**:
  - Upon successful login, users are redirected to a dashboard that fetches and displays a list of Kannada movies.
  - Movies are displayed with detailed information including the poster, title, language, genre, and category.

- **Company Info**:
  - The application includes a "Company Info" option in the navigation bar, displaying company details when selected.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sksaurabh2495/clippet.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd clippet
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

## Usage

- Open your browser and go to `http://localhost:3000/login` to access the application.
- Register a new account on the signup page.
- Log in using your registered credentials to access the dashboard and view the movie list.
- Click on the "Company Info" option in the navigation bar to view the company details.

## Technologies Used

- **React JS**: A JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **Axios**: For making HTTP requests to the movie API.
- **React Router DOM**: For handling navigation and routing within the application.

## API

- The application uses the following API to fetch movie data:
  - **URL**: `https://hoblist.com/api/movieList`
  - **Method**: `POST`
  - **Parameters**: 
    - `category: "movies"`
    - `language: "kannada"`
    - `genre: "all"`
    - `sort: "voting"`

## Acknowledgements

- This project was developed as a demonstration of React JS capabilities with a focus on user authentication and API integration.
