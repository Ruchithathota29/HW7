import { useState } from "react";
import axios from "axios";

function SpecificVerse() {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [result, setResult] = useState("");

  const fetchSpecificVerse = async () => {
    if (!book || !chapter || !verse) {
      setResult("Please enter a book, chapter, and verse.");
      return;
    }

    try {
      const response = await axios.get(
        `https://labs.bible.org/api/?passage=${book}%20${chapter}:${verse}&type=json`
      );

      if (response.data.length > 0) {
        const { bookname, chapter, verse: verseNum, text } = response.data[0];
        setResult(`${bookname} ${chapter}:${verseNum} - ${text}`);
      } else {
        setResult("Verse not found. Check your input.");
      }
    } catch (error) {
      console.error("Error fetching verse:", error);
      setResult("Error fetching verse. Try again!");
    }
  };

  return (
    <div className="card">
      <h2>Get a Specific Verse</h2>
      <input
        type="text"
        placeholder="Book (e.g. John)"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <input
        type="number"
        placeholder="Chapter"
        value={chapter}
        onChange={(e) => setChapter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Verse"
        value={verse}
        onChange={(e) => setVerse(e.target.value)}
      />
      <button onClick={fetchSpecificVerse}>Get Verse</button>
      <p>{result}</p>
    </div>
  );
}

export default SpecificVerse;
