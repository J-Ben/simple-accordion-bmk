import React, { useState, useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import "./Accordion.css";
export const accordionContext = React.createContext(null);
const Accordion = ({ children }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <accordionContext.Provider value={{ isExpand, setIsExpand }}>
      <div className={`accordion__item ${isExpand === true ? "active" : ""}`}>
        {children}
      </div>
    </accordionContext.Provider>
  );
};

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
