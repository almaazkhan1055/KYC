import React from "react";
import ContactForm from "../contactForm";
import SurveyForm from "../surveyForm";

const Form = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 max-md:grid-cols-1">
      <ContactForm />
      <SurveyForm />
    </div>
  );
};

export default Form;
