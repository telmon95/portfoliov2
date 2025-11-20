# Telmon Maluleka - Portfolio Website

A modern, professional portfolio website built with React, showcasing my skills, projects, and experience as a Full-Stack Software Developer.

🌐 **Live Site**: [portfoliotff.netlify.app](https://portfoliotff.netlify.app) | [GitHub Pages](https://telmon95.github.io/portfolio)

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Meta tags and semantic HTML for better search engine visibility
- **Interactive Components**: Animated sections using Framer Motion
- **Contact Form**: Functional contact form for potential employers/clients
- **Project Showcase**: Highlighted featured projects with links and descriptions
- **Skills Visualization**: Interactive skill bars showing proficiency levels

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **CSS3** - Custom styling with CSS variables
- **HTML5** - Semantic markup

## 📦 Installation

1. **Clone the repository** (or navigate to the portfolio directory):
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update name, title, and description

2. **About Section** (`src/components/About.js`):
   - Modify the about text and highlights

3. **Skills Section** (`src/components/Skills.js`):
   - Update skill categories and proficiency levels

4. **Projects Section** (`src/components/Projects.js`):
   - Add/remove projects
   - Update project details, links, and images

5. **Contact Section** (`src/components/Contact.js`):
   - Update contact information
   - Modify social media links

### Styling

- **Colors**: Edit CSS variables in `src/index.css` (root variables)
- **Fonts**: Update Google Fonts import in `public/index.html`
- **Spacing**: Adjust padding/margins in component CSS files

## 🌐 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://www.netlify.com/)
3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📝 Notes

- Update all placeholder links (GitHub, LinkedIn, Twitter, etc.) with your actual profiles
- Replace placeholder images with actual project screenshots
- Add your resume PDF file to the public folder and update the download link
- Configure the contact form to connect to your email service (e.g., EmailJS, Formspree)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Telmon Maluleka**
- Portfolio: [portfoliotff.netlify.app](https://portfoliotff.netlify.app/)
- GitHub: [@yourusername](https://github.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com)

---

Built with ❤️ using React

