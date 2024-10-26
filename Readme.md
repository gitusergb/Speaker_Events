
# Speaker_Events 

A simple web project that dynamically generates speaker cards using JavaScript, HTML, and CSS, displaying speaker information.

## Project Overview

This project fetches speaker data from a JavaScript array and uses DOM manipulation to create and display individual speaker cards. Each card includes an image, name, title, and company,social_links, all organized within a semantic `<section>` element with accessible and modular HTML.

## Live Demo

You can check out the live demo of the project on **Netlify** by visiting the following link:

[Live Demo](https://magical-custard-b74b64.netlify.app/)

---

## Features

- **Dynamic Content Generation**: Speaker cards are created dynamically from an array, making it easy to add, remove, or update speaker data.
- **Semantic HTML Structure**: Uses semantic tags and ARIA roles for accessibility.
- **Modular and Maintainable**: Clear separation of data and presentation, with CSS for styling and JavaScript for functionality.

## Project Structure

```plaintext
├── index.html      # Main HTML file with basic structure
├── index.css       # CSS for styling the speaker cards and layout
└── index.js       # JavaScript file for dynamically adding speaker data
```

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/gitusergb/Speaker_Events.git
   ```

2. Open `index.html` in a web browser to view the project.

## Code Overview

- **HTML**: Defines the `.speakers` container to hold speaker cards.
- **CSS**: Styles the speaker cards and layout.
- **JavaScript**: Loads data from an array and dynamically creates and appends each card to the `.speakers` container.

## Example Data Structure

Data for each speaker is stored in an array like this:

```javascript
const speakersData = [
  {
   "speaker_name": "John Doe",
      "title": "Chief Marketing Officer",
      "company": "Acme Corp",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
  },
  // Additional speaker objects...
];
```

## Customization

To add new speakers, simply add new objects to the `speakersData` array in `index.js`.

## Contributors

- **Gauri Bidwai**  
  Full Stack Developer (MERN)  
  [GitHub](https://github.com/gitusergb) | [LinkedIn](www.linkedin.com/in/gauri-bidwai)  

