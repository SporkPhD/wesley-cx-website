# Wesley Cox | Cybersecurity Analyst - Personal Website

A clean, minimal, and professional single-page personal website for a Cybersecurity Analyst. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop.
- **Theme System**:
  - **Light Mode**: Clean and professional.
  - **Dark Mode**: Sleek and modern (Default).
  - **Party Mode**: Hidden "Easter egg" theme with vibrant colors.
- **Animations**:
  - Typing/Rotating text in the Hero section.
  - Years of experience counter (precise to 8 decimal places).
  - Smooth scroll navigation.
  - Fade-in sections on scroll.
  - Animated skill bars.
- **Interactive Elements**:
  - Fixed social sidebar.
  - Project cards with hover effects.
  - Experience tabs.

## File Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # All styles, variables, and animations
├── script.js           # Logic for themes, animations, and interactions
├── wesley_cox_resume.pdf # Placeholder for your resume
└── README.md           # This documentation
```

## Setup & Deployment

### Local Development
1. Clone the repository.
2. Open `index.html` in your web browser.
3. No build step required!

### GitHub Pages Deployment
1. Push this code to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Source**, select `Deploy from a branch`.
4. Select your `main` (or `master`) branch and `/ (root)` folder.
5. Click **Save**. Your site will be live shortly.

## Customization Guide

### 1. Updating Content
- **Personal Info**: Edit the text in `index.html` (Hero, About, Contact sections).
- **Projects**: Modify the `.project-card` elements in the `#projects` section.
- **Skills**: Update the `.skill-info` spans and `data-width` attributes in the `#skills` section.
- **Experience**: Update the `.job-panel` elements in the `#experience` section.
- **Resume**: Replace `wesley_cox_resume.pdf` with your actual PDF file.

### 2. Color Customization
Colors are defined as CSS variables in `styles.css`. You can easily change the color schemes by modifying the `:root` variables.

**Default Palette (Light/Dark):**
- `--p2-black`: Main dark background
- `--p2-muted-teal`: Primary accent color
- `--p2-champagne`: Light text/background

**Party Mode Palette:**
- `--p1-neon-pink`: Bright accent
- `--p1-turquoise`: Secondary accent

To change a color, simply update the hex code in `styles.css`:
```css
:root {
    --p2-muted-teal: #YOUR_NEW_COLOR;
}
```

### 3. Animations
- **Typing Text**: Edit the `roles` array in `script.js` to change the rotating titles.
- **Experience Counter**: Update the `startDate` in `script.js` to your actual start date.

## Party Mode (Easter Egg)
To activate Party Mode, click the **Theme Toggle** button (moon/sun icon) **3 times quickly**.

## Credits
Inspired by [ryana.page](https://ryana.page/).
Colors from Coolors.co.
Icons by FontAwesome.
Fonts by Google Fonts (Inter & JetBrains Mono).
