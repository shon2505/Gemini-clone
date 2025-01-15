# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  # Gemini Clone

This project is a clone of Gemini, which can be used locally for testing and development purposes. Follow the instructions below to set up and run the project.

---

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or higher)
- npm (Node Package Manager)

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone (https://github.com/shon2505/Gemini-clone.git)
   cd <repository-folder>
   ```

2. **Install Dependencies**
   Run the following command to install the required dependencies:
   ```bash
   npm i
   ```

3. **Configure API Key**
   - Open the file `gemini.js` located in the `config` folder.
   - Replace the placeholder with your actual API key:
     ```javascript
     const API_KEY = "your-api-key-here";
     ```

4. **Run the Application**
   Start the development server with the following command:
   ```bash
   npm run dev
   ```

5. **Access the Application**
   - Open your browser and navigate to:
     ```
     http://localhost:5173
     ```

---

## Features
- Simulates Gemini’s core functionality.
- Local deployment for testing and experimentation.

---

## Troubleshooting
- Ensure all dependencies are properly installed.
- Check if your API key is correctly configured in `gemini.js`.
- If the development server fails to start, confirm that the required ports are available on your machine.

---

## License
This project is for educational and personal use only.

---

## Support
For any issues or questions, feel free to reach out to the project maintainer.


