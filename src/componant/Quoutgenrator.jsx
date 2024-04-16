import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Quoutgenrator() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuotes = async () => { 
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://type.fit/api/quotes');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.response.status}`);
      }
      const data = await response.json();
      setQuote(data[Math.floor(Math.random() * data.length)]); // Pick a random quote
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes(); // Fetch quote on component mount (optional)
  }, []);

  return (
    <>
      {isLoading && <p>Loading quote...</p>}
      {error && <p>Error fetching quote: {error}</p>}
      {quote && (
        <>
      
          <h1 className='card-
          text'>"{quote.text}"</h1>
          <p>- {quote.author}</p>
          <button onClick={fetchQuotes}>Get New Quote</button>
  
 
     
         
        </>
        
      )}
          <button className='bg-blue-500 rounded-lg shadow-lg p-2 m -2'> <Link to={"/"}> Home</Link> </button>
    </>
  );
}

export default Quoutgenrator;
    