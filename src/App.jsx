import React from 'react';
import './App.css';

const resources = [
  {
    title: "freeCodeCamp",
    description: "Interactive tutorials on web development, data structures, and more.",
    link: "https://www.freecodecamp.org"
  },
  {
    title: "The Odin Project",
    description: "Full-stack curriculum that’s project-based and free.",
    link: "https://www.theodinproject.com"
  },
  {
    title: "CS50 by Harvard",
    description: "Famous intro to computer science, available on edX and YouTube.",
    link: "https://cs50.harvard.edu"
  },
  {
    title: "MDN Web Docs",
    description: "Official Mozilla documentation on HTML, CSS, and JavaScript.",
    link: "https://developer.mozilla.org"
  },
  {
    title: "W3Schools",
    description: "Beginner-friendly tutorials on all things web dev.",
    link: "https://www.w3schools.com"
  },
  {
    title: "JavaScript.info",
    description: "Detailed JavaScript tutorials with diagrams and examples.",
    link: "https://javascript.info"
  },
  {
    title: "Khan Academy - Computing",
    description: "Programming and computer science lessons for beginners.",
    link: "https://www.khanacademy.org/computing"
  },
  {
    title: "Frontend Mentor",
    description: "Practice frontend skills by building real-world projects.",
    link: "https://www.frontendmentor.io"
  },
  {
    title: "CSS Tricks",
    description: "Helpful articles and guides on all things CSS.",
    link: "https://css-tricks.com"
  },
  {
    title: "CodeNewbie Podcast",
    description: "Inspiring stories and advice for people breaking into tech.",
    link: "https://www.codenewbie.org/podcast"
  }
];

function App() {
  return (
    <div className="App">
      <h1 className="header">🧠 Tech for Beginners Community Board</h1>
      <div className="card-grid">
        {resources.map((res, index) => (
          <div className="card" key={index}>
            <h2>{res.title}</h2>
            <p>{res.description}</p>
            <a href={res.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
