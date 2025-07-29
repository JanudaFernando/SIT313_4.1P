# DEV@DEAKIN - Developer Community Platform

## SIT313 Assignment 4.1P

A modern React-based web application for the Deakin University developer community, featuring articles, tutorials, and user engagement tools. This project is developed as part of the SIT313 - Fullstack Development course assignment 4.1P.

## 📚 Assignment Overview

This project demonstrates the implementation of a full-stack React application as part of **SIT313 Assignment 4.1P**. The application showcases:

- Modern React development practices
- Component-based architecture
- Responsive web design principles
- Dynamic content generation
- Form validation and user interaction
- Professional UI/UX design

**Academic Context**: This assignment focuses on developing secure frontend applications using React, implementing best practices for modern web development within the Deakin University curriculum.

## 🚀 Features

- **Modern Navigation**: Clean, responsive navigation bar with search functionality
- **Featured Content**: Dynamic display of articles and tutorials with faker-generated content
- **Email Subscription**: Newsletter signup with validation and success states
- **Social Media Integration**: Connected footer with social media links
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Interactive UI**: Hover effects, smooth transitions, and modern styling

## 🛠️ Technologies Used

- **React 19.1.1** - Modern React with latest features
- **JavaScript (ES6+)** - Modern JavaScript syntax and features
- **CSS3** - Custom styling with flexbox and grid layouts
- **Faker.js** - Dynamic content generation for articles and tutorials
- **Picsum Photos** - Optimized placeholder images
- **Semantic UI** - Additional UI components

## 📁 Project Structure

```
src/
├── components/
│   ├── NavBar.jsx          # Navigation header with search
│   ├── MainImage.jsx       # Hero image component
│   ├── ArticleImage.jsx    # Article cards with dynamic content
│   ├── TutorialImage.jsx   # Tutorial cards with tech content
│   ├── ButtonArticle.jsx   # "See All Articles" button
│   ├── ButtonTutorial.jsx  # "See All Tutorials" button
│   ├── EmailSubscribe.jsx  # Newsletter subscription form
│   ├── Footer.jsx          # Site footer with links
│   ├── SearchBar.jsx       # Search input component
│   └── components.css      # Centralized styling
├── img/
│   └── search.png          # Search icon
├── index.js                # Main application entry point
└── index.css               # Global styles
```

## 🎨 Component Features

### Navigation Bar

- Sticky positioning with modern design
- Integrated search functionality
- Professional button styling
- Responsive layout

### Dynamic Content

- **Articles**: Business and tech-focused content using Faker.js
- **Tutorials**: Programming and development tutorials
- **Images**: Fast-loading Picsum Photos integration
- **Interactive Cards**: Hover effects and smooth transitions

### Email Subscription

- Form validation with error handling
- Success state management
- Professional styling with responsive design

### Footer

- Three-column layout (Explore, Support, Stay Connected)
- Social media integration with hover effects
- Legal links and copyright information
- Mobile-responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd 4.1P
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`

Runs the app in development mode with hot reloading.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: This is a one-way operation. Once you eject, you can't go back!**

## 🎯 Key Components Overview

| Component      | Purpose           | Features                                     |
| -------------- | ----------------- | -------------------------------------------- |
| NavBar         | Site navigation   | Search, sticky positioning, responsive       |
| MainImage      | Hero section      | Optimized image display, cropped view        |
| ArticleImage   | Article showcase  | Dynamic content, card layout, hover effects  |
| TutorialImage  | Tutorial display  | Tech-focused content, interactive cards      |
| EmailSubscribe | Newsletter signup | Validation, error handling, success states   |
| Footer         | Site footer       | Social links, legal pages, responsive design |

## 🎨 Styling Approach

- **CSS Methodology**: Component-based styling with centralized CSS file
- **Layout**: Flexbox and CSS Grid for responsive layouts
- **Colors**: Professional color scheme with consistent theming
- **Typography**: Clear hierarchy with readable fonts
- **Interactions**: Smooth transitions and hover effects
- **Responsive**: Mobile-first approach with breakpoints

## 🔧 Customization

### Adding New Content

- Modify `ArticleImage.jsx` or `TutorialImage.jsx` for content changes
- Update `components.css` for styling modifications
- Add new components following the existing structure

### Styling Changes

- All styles are centralized in `src/components/components.css`
- Each component has its own CSS class namespace
- Responsive breakpoints are defined for mobile compatibility

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first CSS approach
- Flexible grid layouts
- Responsive navigation
- Touch-friendly interactions
- Optimized images for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is developed as **Assignment 4.1P** for the **SIT313 - Fullstack Development** course at Deakin University.

### Assignment Details

- **Course**: SIT313 - Fullstack Development Secure Frontend Applications
- **Task**: 4.1P - React Application Development
- **Academic Year**: 2025
- **Institution**: Deakin University

## 👥 Author

**Januda Fernando**

- GitHub: [@JanudaFernando](https://github.com/JanudaFernando)
- University: Deakin University
- Course: SIT313 - Fullstack Development
- Assignment: 4.1P

---

**Built with ❤️ for SIT313 Assignment 4.1P - Deakin University**

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
