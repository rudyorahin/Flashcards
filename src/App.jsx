import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';


// Random next card
// Question showing image
// card with different visual style like color, catigories( easy, hard), 
// previous card should return to previous



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
    { question: "How often national teams play the World Cup?", answer: "Every four years!", category: "easy"}

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [theStatus, setTheStatus] = useState(true); 

  const nextRandomCard = () => {
      let randomIndex;
      do {
          randomIndex = Math.floor(Math.random() * cardsData.length);
      } while (randomIndex === currentIndex);
      setCurrentIndex(randomIndex);
      setTheStatus(true); 
  };

  const prevCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
      setTheStatus(true); 
  };

  const flip = () => {
      setTheStatus(!theStatus); 
  };

  return (
      <div className='App'>
          <h1>The Ultimate Football Quiz Game</h1>
          <h3>How good of a football fan are you? Test all your football knowledge here!</h3>
          <h5>Number of cards: {cardsData.length}</h5>
          
          <Card
              className="questions"
              question={cardsData[currentIndex].question}
              answer={cardsData[currentIndex].answer}
              theStatus={theStatus}
              flip={flip} 
              image={cardsData[currentIndex].image}
              category={cardsData[currentIndex].category}
          />
          
          <div className="navigation">
              <button className='button' onClick={prevCard}>Previous</button>
              <button className='button' onClick={nextRandomCard}>Next</button>
          </div>
      </div>
  );
}

export default App;