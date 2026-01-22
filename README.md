# Mobile Developer Portfolio

A modern, responsive portfolio website for a mobile developer, built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX**: Beautiful gradient designs with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🌙 **Dark Mode Support**: Automatic dark mode based on system preferences
- ⚡ **Fast Performance**: Built with Next.js 16 for optimal performance
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- 📊 **Interactive Components**: Expandable project cards, contact forms, and more

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Skills Section**: Visual representation of technical skills with progress bars
3. **Projects Section**: Showcase of 6 mobile applications with details
4. **Experience Section**: Timeline of professional work experience
5. **Contact Section**: Contact form and information
6. **Footer**: Social links and additional information

## Tech Stack

- **Framework**: Next.js 16.1.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **React**: 19.2.3
- **Font**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Updating Personal Information

Edit the file `app/data/portfolio.ts` to update:

- Personal information (name, title, bio, contact details)
- Skills and expertise levels
- Project details and links
- Work experience
- Education
- Testimonials

### Changing Colors

The color scheme uses Tailwind CSS. Main colors are:
- Primary: Blue (from-blue-500 to-blue-600)
- Secondary: Purple (from-purple-500 to-purple-600)

Update these in the component files or create a custom Tailwind configuration.

### Adding Images

Replace placeholder images by adding your actual images to the `/public` directory and updating the paths in `app/data/portfolio.ts`.

## Project Structure

```
portfolio/
├── app/
│   ├── components/        # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/             # Mock data
│   │   └── portfolio.ts
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json
└── README.md
```

## Mock Data

The portfolio includes comprehensive mock data for:

- **6 Mobile Projects**: Including fitness apps, e-commerce, messaging, food delivery, meditation, and productivity tools
- **4 Work Experiences**: From freelance to senior developer positions
- **Multiple Skills Categories**: Mobile frameworks, languages, tools, and backend technologies
- **Education & Certifications**: Academic background and professional certificates
- **Testimonials**: Client and colleague reviews

## Building for Production

```bash
pnpm build
# or
npm run build
```

Then start the production server:

```bash
pnpm start
# or
npm start
```

## Deployment

This project can be easily deployed to:

- **Vercel**: Push to GitHub and connect to Vercel (recommended)
- **Netlify**: Connect your repository to Netlify
- **Other Platforms**: Any platform that supports Next.js

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=your-repo-url)

## Performance Optimizations

- Server-side rendering (SSR) with Next.js
- Optimized images with next/image (when actual images are added)
- Minimal bundle size with tree-shaking
- CSS optimization with Tailwind CSS
- Lazy loading for better initial load time

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback about this portfolio template:

- Email: luuchanhuy@example.com
- GitHub: [github.com/luuchanhuy](https://github.com/luuchanhuy)
- LinkedIn: [linkedin.com/in/luuchanhuy](https://linkedin.com/in/luuchanhuy)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
