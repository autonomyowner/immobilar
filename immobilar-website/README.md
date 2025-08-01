# Immobilar - Luxury Real Estate Website

A modern, professional real estate website built with React, TypeScript, and Vite. This website showcases luxury properties and provides comprehensive real estate services.

## Features

- **Modern Design**: Clean, professional design inspired by luxury real estate websites
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Functional contact form for client inquiries
- **Property Showcase**: Featured properties with detailed information
- **Team Section**: Professional team member profiles
- **Testimonials**: Client feedback and ratings
- **Services Overview**: Comprehensive service offerings

## Technology Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful, customizable icons
- **CSS3**: Modern styling with Flexbox and Grid

## Project Structure

```
immobilar-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   ├── Properties.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd immobilar-website
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Adding Images

The website includes placeholder areas for images. To add your own images:

1. Place your images in the `public/` directory
2. Update the image paths in the components:
   - Team member photos in `Team.tsx`
   - Property images in `Properties.tsx`
   - Client photos in `Testimonials.tsx`

### Updating Content

- **Company Information**: Update contact details in `Header.tsx`, `Contact.tsx`, and `Footer.tsx`
- **Team Members**: Modify the team data in `Team.tsx`
- **Properties**: Update property listings in `Properties.tsx`
- **Services**: Customize services in `Services.tsx`
- **Testimonials**: Add client testimonials in `Testimonials.tsx`

### Styling

The website uses CSS modules and custom CSS. Main styles are in:
- `src/index.css` - Global styles and utilities
- `src/App.css` - Component-specific styles

## Features to Add

- **Image Gallery**: Add property image galleries
- **Search Functionality**: Implement property search
- **Map Integration**: Add interactive maps for property locations
- **Blog Section**: Add a blog for real estate insights
- **Newsletter Signup**: Email subscription functionality
- **Multi-language Support**: Internationalization
- **Admin Panel**: Content management system

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for fast loading
- Responsive images
- Efficient CSS and JavaScript
- SEO-friendly structure

## Contact

For questions or support, contact:
- Phone: +213 557 30 40 04
- Email: contact@immobilar.com

## License

This project is licensed under the MIT License.
