# Interactive Pricing Component

This project is an interactive pricing component built with React and Tailwind CSS. It allows users to select their desired page view count and billing cycle, displaying the corresponding price dynamically.
![Slider Image which is responsive and interactive](UI-Image.png)

## Features

- Interactive slider to select page view count
- Toggle switch for monthly/yearly billing
- Dynamic price calculation based on selected options
- Responsive design for various screen sizes
- Hover states for interactive elements

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite (as the build tool)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Setup and Running the Project

1. Clone the repository:

   ```
   git clone https://github.com/mkalantari96/Interactive-price-component.git
   cd Interactive-price-component
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.

## Building for Production

To create a production build, run:

```
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/components/`: Contains all React components
- `src/assets/`: Contains static assets like SVG icons
- `src/App.tsx`: Main application component
- `src/index.css`: Global styles and Tailwind CSS imports
- `tailwind.config.js`: Tailwind CSS configuration

## Customization

- Modify the pricing logic in `PriceCard.tsx`
- Adjust the styling by editing the Tailwind classes in component files
- Update the SVG icons in the `assets` folder for custom designs
