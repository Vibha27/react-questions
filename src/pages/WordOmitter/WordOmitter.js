import React, { useCallback, useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    // TODO: Add your changes here
    setInputText("")
  };

  const getProcessedText = useCallback(() => {
    // TODO: Add your changes here
    if (omitWords) {
      let processedText = "";
      let words = inputText.split(" ")
      for (let word of words) {
        if (!OMITTED_WORDS.includes(word)) {
          processedText += word + " "
        }
      }
      return processedText.trim();
    }
    return inputText;
    
  }, [inputText, omitWords]);

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div>
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>{" "}
        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
