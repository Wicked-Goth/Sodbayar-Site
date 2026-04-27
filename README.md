# Sodbayar-Site
A website made to get to know me better
📄 Program Documentation
Personal Portfolio Website – Sodbayar Battur
1. Introduction

This project is a personal portfolio website created using HTML, Tailwind CSS, and a small amount of JavaScript. The purpose of the website is to present personal information, background, academic goals, and future plans in a visually appealing and interactive way.

The website is designed as a single-page application (SPA) where all sections are accessible through smooth scrolling navigation instead of loading multiple pages.

2. Technologies Used
HTML5 – used for structuring the content of the webpage
Tailwind CSS – used for styling and layout (utility-first approach)
Google Fonts – for typography (Bebas Neue and Poppins)
JavaScript (Vanilla) – for navigation highlighting and small interactivity
3. Overall Structure

The code is divided into the following main parts:

Head Section
Navigation Bar
Content Sections
Footer
JavaScript Functionality

Each part plays a different role in the webpage.

4. Head Section

The <head> contains metadata and external resources:

Responsive design is enabled using:
<meta name="viewport" content="width=device-width, initial-scale=1" />
Google Fonts are imported to improve visual design.
Tailwind CSS is included via CDN for easy styling.
Custom CSS is written inside <style> to override or extend Tailwind.

Some custom styles include:

Smooth scrolling behavior
Custom scrollbar design
Avatar styling for the family tree
Active navigation highlighting
5. Navigation Bar

The navigation bar is fixed at the top and allows users to jump between sections.

Key features:

Uses Tailwind classes for layout (flex, gap, rounded-full)
Responsive design:
Hidden on smaller screens
Fully visible on larger screens (lg:flex)
Active link highlighting using JavaScript
6. Sections Overview

The website is divided into multiple sections, each representing a part of the author's life:

6.1 Home Section
Acts as a landing page
Contains introduction, name, and short description
Includes call-to-action buttons
Uses a grid layout for text + image
6.2 About Section
Provides personal background
Uses a dark theme for contrast
Includes descriptive paragraphs and small stat blocks
6.3 Academic Section
Shows educational goals and future academic plans
Contains cards with timelines (2027–2030)
Uses grid layout for responsiveness
6.4 Family Section
Describes family importance
Includes image and text content
Uses cards for traditions and memories
6.5 Family Tree Section

This is one of the more complex parts of the page.

Displays a visual family tree using:
Flexbox
Custom lines (horizontal and vertical divs)
Uses circular avatars for family members
Structured in levels:
Grandparents
Parents
Children

This section is manually designed rather than using a library, which makes it simple but a bit rigid.

6.6 Teenage Life Section
Shows life events in timeline format
Each “chapter” is displayed as a card
Uses consistent styling for readability
6.7 Future Section
Displays goals and ambitions
Uses a background image with overlay
Contains multiple cards for different life goals
6.8 Contact Section
Includes a simple contact form
Fields:
Name
Email
Message
Uses JavaScript to:
Prevent default form submission
Show a temporary “Message sent” notification
7. Footer

The footer contains:

Website branding
Navigation links
Contact information

It also includes a small personal note to make the site feel more human and less formal.

8. JavaScript Functionality

The JavaScript part is relatively simple but important.

Main purpose:
👉 Highlight the active navigation link while scrolling

How it works:

All section IDs are stored in an array
On scroll, the script checks which section is currently visible
It updates the navigation link by adding/removing the active class

Example logic:

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) current = id;
  });
});
9. Design Choices

Some design decisions made in this project:

Minimal color palette (black, white, orange accent)
Rounded elements for a modern look
Large typography for emphasis
Grid + Flexbox for layout
Smooth scrolling for better user experience
10. Limitations

Even though the website works well, there are some limitations:

Not fully optimized for very small screens
No backend (form does not actually send messages)
Family tree layout is static and not dynamic
Some text contains minor grammar issues
11. Conclusion

This project demonstrates how a personal portfolio can be built using modern frontend tools like Tailwind CSS. It focuses more on storytelling and design rather than complex functionality.

Overall, the website reflects both technical skills and personal identity, which is important for a portfolio project.
