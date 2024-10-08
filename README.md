# Calculator with Themes

This project is a responsive calculator built using Angular, featuring multiple themes such as retro, modern, and hacker. It includes a theme selection modal, and is designed with full mobile compatibility.

## Features

- **Responsive Design**: The calculator adjusts seamlessly to various screen sizes, including mobile devices.
- **Theme Selection**: Users can choose between several themes, with each theme altering the background and text colors:
  - Retro
  - Modern (Green background)
  - Hacker
- **Rounded Buttons**: The design includes rounded buttons, customizable by theme.
- **Sass-based Styling**: The project uses Sass and mixins to reduce code duplication and enhance maintainability.

## Project Structure

- **`src/`**: The main source folder, containing the Angular components and logic.
- **`public/`**: Public assets, such as images or static files.
- **`docs/`**: Documentation-related files.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   \`\`\`
   git clone https://github.com/Ostryyy/calculator-with-themes.git
   \`\`\`

2. Navigate into the project directory:

   \`\`\`
   cd calculator-with-themes
   \`\`\`

3. Install the dependencies:

   \`\`\`
   npm install
   \`\`\`

## Development Server

To run the project locally, use the following command:

\`\`\`bash
ng serve
\`\`\`

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when changes are made to the source files.

## Building the Project

To build the project for production, run:

\`\`\`
ng build
\`\`\`

The build artifacts will be stored in the `dist/` directory.

## Theme Customization

The calculator allows for dynamic theme selection. When the "Change Theme" button is clicked, a modal window opens where users can preview and select a theme. Each theme updates the calculator's background and text styles.

- **Modern Theme**: Includes rounded buttons with a green background.
- **Retro Theme**: Classic design with retro-style colors.
- **Hacker Theme**: Dark theme inspired by hacker aesthetics.

The themes are implemented using a grid layout in the theme selector modal and are fully responsive on mobile devices.
