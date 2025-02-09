import { Accordion } from "./Accordion";

export const AccordionPage = () => {
  const faqs = [
    {
      title: "How to create an account 1?",
      content: "This is accordion content 1.",
    },
    {
      title: "How to create an account 2?",
      content: "This is accordion content 2.",
    },
    {
      title: "How to create an account 3?",
      content: "This is accordion content 3.",
    },
    {
      title: "How to create an account 4?",
      content: "This is accordion content 4.",
    },
  ];
  return (
    <div>
        <h5>FAQs</h5>
        <br />
      {faqs.length > 0 &&
        faqs.map((faq, index) => (
          <Accordion key={index} title={faq.title} content={faq.content} />
        ))}
    </div>
  );
};
