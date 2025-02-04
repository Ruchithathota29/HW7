import { useState } from "react";
import axios from "axios";

function RandomVerse() {
  const [verse, setVerse] = useState("Click the button to get a random verse");

  const fetchRandomVerse = async () => {
    try {
      const response = await axios.get(
        "https://labs.bible.org/api/?passage=random&type=json"
      );
      if (response.data.length > 0) {
        const { bookname, chapter, verse: verseNum, text } = response.data[0];
        setVerse(`${bookname} ${chapter}:${verseNum} - ${text}`);
      } else {
        setVerse("No verse found.");
      }
    } catch (error) {
      console.error("Error fetching verse:", error);
      setVerse("Error fetching verse. Try again!");
    }
  };

  return (
    <div className="card">
      <h2>Random Bible Verse</h2>
      <p>{verse}</p>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
    </div>
  );
}

export default RandomVerse;
