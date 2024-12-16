import { useState } from "react";

function ToggleMessage() {
  const [messageVisible, setMessageVisible] = useState(true);

  const toggle = () => {
    // if(messageVisible) {
    //   setMessageVisible(false);
    // } else {
    //   setMessageVisible(true);
    // }
    setMessageVisible(!messageVisible);
  }


  return (
    <div className="container">
      <div>
        <button onClick={toggle}>{messageVisible ? 'Nascondi messaggio' : 'Mostra messaggio'}</button>
      </div>
      {messageVisible && (
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eos
          inventore sed quos ut illum dolorem excepturi quasi ab aliquid, quam
          quisquam est, recusandae, exercitationem tempora ea? Recusandae, non
          consectetur.
        </div>
      )}
    </div>
  );
}

export default ToggleMessage;
