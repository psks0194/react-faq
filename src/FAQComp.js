import FAQList from "./FAQList";

const FAQComp = () => {
  const faqs = [
    {
      que: "What is your mothers name?",
      ans: "Geeta singh",
    },
    {
      que: "What is your fathers name?",
      ans: "Yogendra pratap singh",
    },
    {
      que: "What is your name?",
      ans: "Prashant kumar singh",
    },
  ];
  return (
    <div className="faq-comp">
      {faqs.map((faq, index) => {
        return <FAQList key={index} faq={faq} index={index} />;
      })}
    </div>
  );
};

export default FAQComp;
