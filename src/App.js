import { useState, useEffect } from 'react';
 
function App() {
 
  const [christmastimeleft, setChristmastimeleft] = useState({});
  const [christmasjoke, setChristmasjoke] = useState({});
 
  useEffect(() => {
    fetchTimeLeft();
    fetchJoke();
  }, []);
 
  const fetchTimeLeft = () => {
    fetch('https://christmascountdown.live/api/timeleft/total')
      .then(response => response.json())
      .then(data => {
        setChristmastimeleft(data);
      });
  };
 
  const fetchJoke = () => {
    fetch('https://christmascountdown.live/api/joke')
      .then(response => response.json())
      .then(data => {
        setChristmasjoke(data);
      });
  };
 
  return (
    <div className="bg-image h-screen bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center flex-col">
      <div className="text-center p-4 bg-white bg-opacity-80 rounded-lg shadow-xl">
        <p className="text-2xl font-bold mb-2">
          There are {christmastimeleft.days} days, {christmastimeleft.hours} hours, {christmastimeleft.minutes} minutes until Christmas!
        </p>
        <div className="my-4">
          <p className="text-lg">
            {christmasjoke.question} <br /> {christmasjoke.answer}
          </p>
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchJoke}
        >
          Refresh Joke
        </button>
      </div>
    </div>
  );
}

export default App;