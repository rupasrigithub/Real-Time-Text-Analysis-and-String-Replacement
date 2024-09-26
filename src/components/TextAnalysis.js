import React, { useState, useEffect } from 'react';
import './TextAnalysis.css';

function TextAnalysis() {
  const [text, setText] = useState('');
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchStr, setSearchStr] = useState('');
  const [replaceStr, setReplaceStr] = useState('');
  const [replacedText, setReplacedText] = useState('');

  // Function to handle textarea input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to replace the string
  const handleReplace = () => {
    if (searchStr) {
      const replaced = text.replaceAll(searchStr, replaceStr);
      setReplacedText(replaced);
    }
  };

  // Calculate unique word count and character count without spaces/punctuation
  useEffect(() => {
    // Count unique words (case insensitive)
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const uniqueWordCount = words ? new Set(words).size : 0;
    setUniqueWords(uniqueWordCount);

    // Count characters excluding spaces and punctuation
    const charCount = text.replace(/[^a-zA-Z0-9]/g, '').length;
    setCharCount(charCount);
    
    // Reset replaced text when original text is modified
    setReplacedText('');
  }, [text]);

  return (
    <div className="text-analysis-container">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here..."
        rows="10"
        className="text-area"
      ></textarea>

      <div className="stats">
        <p>Unique Words: {uniqueWords}</p>
        <p>Character Count (excluding spaces & punctuation): {charCount}</p>
      </div>

      <div className="replace-container">
        <input
          type="text"
          placeholder="Search for..."
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Replace with..."
          value={replaceStr}
          onChange={(e) => setReplaceStr(e.target.value)}
          className="input-field"
        />
        <button onClick={handleReplace} className="replace-button">
          Replace All
        </button>
      </div>

      <div className="replaced-text-container">
        <h2>Replaced Text:</h2>
        <p
          className="replaced-text"
          dangerouslySetInnerHTML={{ __html: replacedText.replace(
            new RegExp(replaceStr, 'g'),
            `<span class="highlight">${replaceStr}</span>`
          ) }}
        />
      </div>
    </div>
  );
}

export default TextAnalysis;
