# Real-Time Text Analysis and String Replacement

## Project Overview

This React-based web application allows users to input text in a large textarea and get real-time statistics on the text. It provides functionalities such as counting unique words, counting characters (excluding spaces and punctuation), and dynamically replacing specific strings. The user can also see real-time updates as they type, and the app offers an option to replace and highlight words as needed.

## Features

- **Real-Time Text Statistics**:
  - Displays the count of unique words (case-insensitive).
  - Displays the character count excluding spaces and punctuation.
  
- **String Replacement**:
  - Allows users to enter a string to search and replace it with another string in the text.
  - Includes a "Replace All" button to replace all occurrences of the searched string.
  
- **Optional Bonus**:
  - Replaced words are highlighted visually in the output.

## Tech Stack

- **Frontend**: React.js (with functional components and hooks)
- **Styling**: CSS (with vibrant multicolor and thick designs for the UI)
- **Deployment**: Deployed using GitHub Pages/Netlify/Vercel

## How to Run the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/real-time-text-analysis.git
   cd real-time-text-analysis
Install Dependencies: Install the required packages using npm or yarn:

npm install
# or
yarn install

Run the Application: Once the dependencies are installed, start the development server:

npm start

This will open the app in your default browser at http://localhost:3000.


project structure

real-time-text-analysis/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── TextAnalysis.js
│   │   └── TextAnalysis.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md


Features Explained

1. Textarea for Input:
The main input field where users can enter any text. The statistics and replacement features are applied to this text in real-time.

2. Unique Word Count:
Displays the total count of unique words in the entered text. This is done by converting all words to lowercase and using a Set to track unique words.

3. Character Count (Excluding Spaces and Punctuation):
This feature counts all characters in the input text, excluding spaces and punctuation, ensuring that only meaningful text is counted.

4. String Replacement:
Provides two input fields:

First, to specify the string to search for.
Second, to enter the replacement string. When the "Replace All" button is clicked, all instances of the first string are replaced by the second one.

5. Bonus Feature: Highlight Replaced Words:
Replaced words are visually highlighted to provide better user feedback.

Example

Here’s an example of how the app works:

Input Text: "Hello world, welcome to the world of React."

Unique Word Count: 7

Character Count: 34

Replacement: Replace "world" with "universe"

Result: "Hello universe, welcome to the universe of React." (with "universe" highlighted)

output:

![image](https://github.com/user-attachments/assets/8e65b70b-93ed-465c-8979-3397a7d29416)


Deployment

The project can be deployed using services like:

. GitHub Pages

. Netlify

. Vercel

To deploy on GitHub Pages:

1. In your package.json, add:
   "homepage": "https://yourusername.github.io/real-time-text-analysis"
   
3. Run
   
  npm run build

5. Deploy to GitHub Pages:
   
  npm run deploy

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

Thanks to the open-source community for tools and resources used to build this project.


### Key Sections:

1. **Project Overview**: Describes what the app does, including the core functionality.
  
2. **Features**: Explains real-time text analysis, string replacement, and any bonus features.
   
3. **Tech Stack**: Lists the technologies used.
   
4. **How to Run the Project**: Provides clear instructions on cloning the repo, installing dependencies, and running the project.
   
5. **Project Structure**: A tree diagram to show how the project files are organized.
    
6. **Features Explained**: Further details about how each part of the project works.
    
7. **Deployment Instructions**: Guides for deploying using GitHub Pages.
    
8. **Acknowledgments and License**: Attribution and licensing details. 

You can modify the repository URL (`https://github.com/yourusername/real-time-text-analysis.git`) to match your GitHub link and any deployment instructions depending on the service you choose.

