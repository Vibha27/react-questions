import { useState } from "react";

export const Accordion = ({ title = "", content = "" }) => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent)
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleShowContent}>
        <h4>{title}
        {showContent ? <span className="accordion-icon">-</span> :
        <span className="accordion-icon">+</span>}
        </h4>
      </div>
      {showContent && <>
      <hr/> 
      <div className="accordion-body">{content}</div>
      </>}
    </div>
  );
};
