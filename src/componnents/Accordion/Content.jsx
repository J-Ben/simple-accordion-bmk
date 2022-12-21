import React, { useContext } from 'react';
import { accordionContext } from "./Accordion";

const Content = ({children}) => {
  const {isExpand, setIsExpand} = useContext(accordionContext);
  return (
    <div className="accordion__content">{isExpand===true ? children : null}</div>
  )
}

export default Content