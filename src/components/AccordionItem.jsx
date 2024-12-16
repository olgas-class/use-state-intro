import { useState } from "react";

function AccordionItem({ id, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="border p-3">
      <div className="d-flex justify-content-between">
        <h4>{title}</h4>
        <button onClick={toggleOpen}>{isOpen ? 'chiudi' : 'apri'}</button>
      </div>
      {isOpen ? <div>{content}</div> : ''}
    </div>
  );
}

export default AccordionItem;
