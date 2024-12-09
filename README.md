
# React Sign-Up and Login Forms with Formik (Next.js)

This application features **Sign Up** and **Login** forms using Formik for form handling and validation. It includes features like password strength indicators and "Remember Me" functionality.

## Features

- **Sign Up Form**: Email, password, and confirm password fields with a password strength indicator.
- **Login Form**: Email and password fields with a "Remember Me" checkbox to store email in `localStorage`.
- **Success Messages**: Displays "Sign Up Successful" or "Login Successful" upon successful submission.

## How to Run

### Prerequisites

- Node.js (v14 or above)

### Steps to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nextjs-signup-login-forms.git
   ```

2. Install dependencies:

   ```bash
   cd nextjs-signup-login-forms
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser.

## Design Choices

- **Formik**: Used for handling form state and validation with Yup for schema validation.
- **TypeScript**: Ensures type safety and better development experience.
- **No Third-Party UI Libraries**: Basic HTML elements and Tailwind CSS for styling.
- **Password Strength Indicator**: Provides feedback on password strength in the Sign Up form.

## Assumptions & Limitations

- No backend or session management is implemented. Forms are simulated on the frontend.
- The "Remember Me" stores the email only in `localStorage`.
- Basic password strength validation is implemented.


