# GoGetWell.ai Website

A modern, responsive website for GoGetWell.ai - an AI-powered healthcare platform that helps medical professionals improve patient outcomes through artificial intelligence.

![GoGetWell.ai Homepage](https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- 🔐 User authentication system
- 🎯 Clear call-to-actions
- 💨 Fast loading with optimized assets
- 🔍 SEO-friendly structure
- 🎨 Custom color scheme and branding

## Key Sections

1. **Hero Section**
   - Eye-catching headline and value proposition
   - Clear call-to-action buttons
   - Visual representation of the platform

2. **Features**
   - AI-Powered Diagnostics
   - HIPAA Compliant Security
   - Time-Saving Automation
   - Predictive Analytics
   - Collaborative Care
   - Smart Documentation

3. **How It Works**
   - Step-by-step explanation of the platform
   - Visual process flow
   - Interactive elements

4. **Testimonials**
   - Customer success stories
   - Rotating testimonial carousel
   - Professional headshots and credentials

5. **Pricing**
   - Three-tier pricing structure
   - Feature comparison
   - Highlighted recommended plan

6. **FAQ**
   - Common questions and answers
   - Expandable accordion style
   - Clear categorization

7. **Authentication**
   - User signup and login
   - Form validation
   - Error handling
   - Persistent session management

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Project Structure

```
src/
├── components/
│   ├── CTA.tsx
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Login.tsx
│   ├── Navbar.tsx
│   ├── Pricing.tsx
│   └── Testimonials.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Screenshots

### Homepage
![Homepage](https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)

### Features Section
![Features](https://images.pexels.com/photos/7578754/pexels-photo-7578754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)

### Login Page
![Login](https://images.pexels.com/photos/7578813/pexels-photo-7578813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)

## Key Features Explained

### Authentication System
- Local storage-based user management
- Secure password handling
- Form validation and error messages
- Seamless signup to login flow

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Performance
- Optimized asset loading
- Minimal dependencies
- Efficient state management
- Fast page transitions

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```js
colors: {
  primary: 'rgb(var(--color-primary) / <alpha-value>)',
  'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
  secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
  accent: 'rgb(var(--color-accent) / <alpha-value>)',
}
```

### Typography
Font settings can be adjusted in `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.