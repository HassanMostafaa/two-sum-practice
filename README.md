# Two Sum Finder

A modern web application that finds pairs of numbers in an array that sum up to a target value. Built with React, TypeScript, and Tailwind CSS.

![Two Sum Finder Screenshot](https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2400&ixlib=rb-4.0.3)

## Features

- Find multiple pairs of numbers that sum up to a target value
- Handle duplicate numbers in the input array
- Modern, flat design with dark theme
- Responsive layout for all screen sizes
- Real-time error handling and validation
- Clear visual feedback for results

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/two-sum-finder.git
cd two-sum-finder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a list of numbers separated by commas in the "Numbers" input field
2. Set your desired target sum in the "Target Sum" input
3. Click "Find Numbers" to see all pairs that sum up to your target
4. Results will display on the right side of the screen

### Example

Input:
- Numbers: `2, 7, 11, 15, 2, 7`
- Target Sum: `9`

Expected Output:
- `[2, 7]` (multiple occurrences will be shown once)

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Project Structure

```
two-sum-finder/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── package.json         # Project dependencies and scripts
```

## Algorithm

The Two Sum algorithm uses a nested loop approach to find all pairs of numbers that sum up to the target value. It includes duplicate handling to ensure unique pairs are returned.

Time Complexity: O(n²)
Space Complexity: O(k) where k is the number of unique pairs found

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by modern flat UI principles
- Built with React and TypeScript best practices
- Optimized for performance and user experience