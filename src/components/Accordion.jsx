import AccordionItem from "./AccordionItem";
import faqs from "../data/faq";
import AccordionItemAdvanced from "./AccordionItemAdvanced";
import { useState } from "react";

function Accordion() {
  // const [activeAccordion, setActiveAccordion] = useState(1);

  return (
    <>
      {/* Basic example */}
      {faqs.map((curFaq) => (
        <AccordionItem key={curFaq.id} id={curFaq.id} content={curFaq.content} title={curFaq.title}/>
      ))}

      {/* AdvancedExample */}
      {/* {faqs.map((curFaq) => (
        <AccordionItemAdvanced
          key={curFaq.id}
          id={curFaq.id}
          content={curFaq.content}
          title={curFaq.title}
          isOpen={activeAccordion === curFaq.id}
          onToggle={() => {
            setActiveAccordion(curFaq.id)
          }}
        />
      ))} */}
    </>
  );
}

export default Accordion;
