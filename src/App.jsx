import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';



function App() {
  
  const cardsData = [
    { question: "Who is the best football player today?", answer: "Messi", category: "easy" },
    { question: "Who has scored the most official goals?", answer: "Cristiano Ronaldo", category: "medium" },
    { question: "Which national team has won the most FIFA World Cups?", answer: "Brazil", image: "./src/images/worldcup.png", category: "easy" },
    { question: "Which club has the most UEFA Champions League titles?", answer: "Real Madrid", category: "medium" },
    { question: "Which Premier League club has the most fans?", answer: "Manchester United", category: "hard" },
    { question: "What is the name of the stadium where FC Barcelona plays?", answer: "Camp Nou", category: "easy" },
    { question: "What is the earliest known form of soccer?", answer: "Cuju (kick ball)", category: "hard" },
    { question: "What country was home to the world's first soccer league?", answer: "England", category: "medium" },
    { question: "Which player scored the 'Hand of God' goal in a World Cup match?", answer: "Diego Maradona", category: "medium" },
    { question: "How often national teams play the World Cup?", answer: "Every four years", category: "easy"}

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [theStatus, setTheStatus] = useState(true); 
  const [userGuess, setUserGuess] = useState(''); // store user guess
  const [feedback, setFeedback] = useState(''); // State for feedback on the guess

  const nextRandomCard = () => {
    // random next
    //   let randomIndex;
    //   do {
    //       randomIndex = Math.floor(Math.random() * cardsData.length);       //random(0.0-0.999) * (10) = (0.0-9.999) = (0-9) 
    //   } while (randomIndex === currentIndex);
    // setCurrentIndex(randomIndex);

    setCurrentIndex( (nextIndex) => (nextIndex + 1 + cardsData.length) % cardsData.length );
    setTheStatus(true);
    setFeedback('');
    setUserGuess('');
  };

  const prevCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
      setTheStatus(true);
      setFeedback('');
      setUserGuess('');
  };

  const flip = () => {
      setTheStatus(!theStatus); 
  };

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };


  const checkGuess = (event) => {
    // setTheStatus(false); // Reveal the anwer
    event.preventDefault();
    setFeedback(userGuess.toLowerCase() === cards[currentIndex].answer.toLowerCase() ? 'Correct' : 'Try again' );
  }

  function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
  }

    const [cards, setCards] = useState(cardsData); 

    const shuffleCards = () => {
    const shuffledCards = shuffleArray([...cards]); // Create a copy of the cards array and shuffle it
    setCards(shuffledCards);
    setCurrentIndex(0); // Optionally, reset the currentIndex to start with the first card of the shuffled array
    setFeedback('');
    setUserGuess('');
    };

  return (
      <div className='App'>
          <h1>The Ultimate Football Quiz Game</h1>
          <h3>How good of a football fan are you? Test all your football knowledge here!</h3>
          <h5>Number of cards: {cards.length}</h5>
          
          <Card
              className="questions"
              question={cards[currentIndex].question}
              answer={cards[currentIndex].answer}
              theStatus={theStatus}
              flip={flip} 
              image={cards[currentIndex].image}
              category={cards[currentIndex].category}
          /> <br />

          <form onSubmit={checkGuess} style = {{ padding:'1cm'}} >
            <label htmlFor="guess" >Input your guess answer:   </label>
            <input 
                type="text"
                placeholder='Enter your guess'
                value={userGuess}
                onChange={handleGuessChange}
                name="guess"
                id="guess"
                style={{ background: 'black', color:'green' }}
            />
            <input type="submit" />
        </form>
            
        <p style={{ width: '100%', height: "1cm", textAlign: "center" }}>{feedback}</p>


          <div className="navigation">
              <button className='button' onClick={prevCard}>Previous</button>
              <button className='button' onClick={nextRandomCard}>Next</button>
              <button className='button' onClick={shuffleCards}>Shuffle</button>
          </div>
      </div>
  );
}

export default App;