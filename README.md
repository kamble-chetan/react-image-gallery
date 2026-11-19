# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
# React Image Gallery

A responsive image gallery built with **React** and the **Unsplash API**. Browse photos, search for images using keywords, navigate through pages, and view photos in a larger preview.

## Features

- Browse photos from Unsplash.
- Search photos by keyword.
- Paginate through photo results.
- View larger images using a photo preview modal.
- Clear search and return to the normal gallery.
- Responsive image grid.

## Tech Stack

- React.js
- JavaScript
- Tailwind CSS
- Axios
- Unsplash API
- Vite

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kamble-chetan/react-image-gallery.git
```

### 2. Navigate to the project directory

```bash
cd react-image-gallery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the Unsplash API

Create a `.env` file in the root directory:

```env
VITE_UNSPLASH_KEY=your_unsplash_access_key
```

Replace the placeholder with your own Unsplash Access Key.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Project Structure

```text
image-gallery/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Future Improvements

- Photo orientation filtering.
- Loading and error states.
- Improved search experience.
- Better UI and user interactions.
- Refactoring into reusable React components.

## API

Photos are provided through the [Unsplash API](https://unsplash.com/developers).

## Author

**Chetan**

[GitHub Profile](https://github.com/kamble-chetan)
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
