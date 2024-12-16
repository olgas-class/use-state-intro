import { useState } from "react";

function Greeting() {
  const [activeGreeting, setActiveGreeting] = useState("Satshriakal");

  const greetings = ["Ciao", "Hello", "Privet", "salut", "Satshriakal", "Hallo"];

  // button.addEventListener(() => { changeGreeting() })

  return (
    <div className="container">
      <div>
        {greetings.map((curGreeting, index) => (
          <button onClick={() => {setActiveGreeting(curGreeting)}} key={index}>{curGreeting}</button>
        ))}
      </div>
      <div>
        {activeGreeting}
      </div>
    </div>
  );
}

export default Greeting;
