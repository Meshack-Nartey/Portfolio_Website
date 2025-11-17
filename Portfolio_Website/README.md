# My Portfolio Website

A modern, responsive portfolio website showcasing your projects, skills, and experience.

## Features

✨ **Modern Design**

- Clean, professional layout with modern styling
- Responsive design that works on all devices
- Smooth scrolling and animations

🎨 **Sections**

- **Navigation Bar** - Sticky header with smooth navigation
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About** - Personal introduction and key highlights
- **Projects** - Showcase your best work with descriptions and links
- **Skills** - Organized display of your technical skills
- **Contact** - Contact form and social media links
- **Footer** - Copyright information

📱 **Responsive**

- Mobile-friendly design
- Tablet and desktop optimized
- Smooth touch interactions

⚡ **Interactive**

- Smooth scroll navigation
- Form validation
- Hover animations and effects
- Intersection Observer for scroll animations

## Getting Started

### Prerequisites

- A web browser
- Text editor (VS Code recommended)

### Setup Instructions

1. **Update Your Information**

   - Edit `index.html` and replace "Your Name" with your actual name
   - Update the subtitle and description in the hero section
   - Modify the About section with your bio

2. **Add Your Images**

   - Place your images in the `img/` folder:
     - `hero.jpg` - Profile/hero image (recommended: 400x400px)
     - `about.jpg` - About section image (recommended: 400x400px)
     - `project1.jpg`, `project2.jpg`, `project3.jpg` - Project images (recommended: 300x200px)

3. **Update Projects**

   - Edit the project cards in the Projects section
   - Update project titles, descriptions, and links
   - Replace placeholder image references with your actual project images

4. **Update Skills**

   - Customize the skill categories and items to match your expertise
   - Add or remove skills as needed

5. **Update Contact Links**
   - Replace social media links with your actual profiles (GitHub, LinkedIn, Twitter, Email)
   - Configure the contact form backend (currently shows a demo message)

### File Structure

```
Portfolio_Website/
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # JavaScript functionality
└── img/                # Images folder
    ├── hero.jpg
    ├── about.jpg
    ├── project1.jpg
    ├── project2.jpg
    └── project3.jpg
```

## Customization

### Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-color: #2563eb; /* Main brand color */
  --secondary-color: #1e40af; /* Darker shade */
  --text-color: #1f2937; /* Text color */
  --light-bg: #f9fafb; /* Light background */
  --dark-bg: #1f2937; /* Dark background */
}
```

### Fonts

The site uses system fonts for optimal performance. To use Google Fonts:

1. Add to `<head>` in `index.html`:
   ```html
   <link
     href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap"
     rel="stylesheet"
   />
   ```
2. Update the `font-family` in `style.css`

### Contact Form

The current form shows a demo message. To make it functional:

1. Use a service like FormSubmit, Netlify Forms, or EmailJS
2. Update the form submission handler in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Free Hosting Options

1. **GitHub Pages**

   - Push to GitHub repository
   - Enable GitHub Pages in settings

2. **Netlify**

   - Connect your GitHub repository
   - Auto-deploys on push

3. **Vercel**

   - Similar to Netlify
   - Great performance

4. **Firebase**
   - Google's hosting platform
   - Good free tier

## Tips for Success

1. **High-Quality Images** - Use professional, well-lit photos
2. **Real Projects** - Link to actual projects you've built
3. **Keep It Updated** - Regularly update your projects and skills
4. **SEO Optimization** - Update meta tags and description
5. **Performance** - Optimize images for faster loading

## Additional Features You Can Add

- Blog section for articles
- Testimonials from clients/colleagues
- Resume download button
- Dark mode toggle
- Language switcher
- Animation effects
- Search functionality

## Troubleshooting

**Images not showing?**

- Ensure image files are in the `img/` folder
- Check file names match exactly in HTML
- Use correct file extensions

**Navigation links not working?**

- Verify section IDs match the href attributes
- Check that JavaScript is enabled

**Form not submitting?**

- Set up a backend service for form handling
- Check browser console for errors

## Support & Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/)

## License

This portfolio template is free to use and modify for personal use.

---

**Happy coding! 🚀 Good luck with your portfolio!**
