function AccordionItemAdvanced({ id, title, content, isOpen, onToggle}) {
  return (
    <div className="border p-3">
      <div className="d-flex justify-content-between">
        <h4>{title}</h4>
        <button onClick={onToggle}>{isOpen ? "chiudi" : "apri"}</button>
      </div>
      {isOpen ? <div>{content}</div> : ""}
    </div>
  );
}

export default AccordionItemAdvanced;
