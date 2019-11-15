import React from "react";
import styled from "styled-components";
import { useRef, useEffect, useState, useCallback } from "react";
import scrollHandler from "./scrollEvent";
import scrollEvent from "./scrollEvent";

const PageContainer = props => {
  const containerEl = useRef(null);
  const [order, setOrder] = useState(0);
  const scrollFunction = useCallback(() => {
    scrollEvent(event, order, updateOrder);
  }, []);
  const updateOrder = newOrder => {
    setOrder(newOrder);
    console.log(order);
    document.body.removeEventListener("wheel", scrollFunction, true);
  };
  useEffect(() => {
    console.log(order);
    document.body.addEventListener("wheel", scrollFunction, true);
    return function cleanup() {
      document.body.removeEventListener("wheel", scrollFunction, true);
    };
  });
  return (
    <Wrapper ref={containerEl}>
      {props.children}
      {order}
      {/* {React.cloneElement(props.children, {
        order: order
      })} */}
    </Wrapper>
  );
};
const Wrapper = styled.main`
  height: 200vh;
  width: 100vw;
`;

export default PageContainer;
