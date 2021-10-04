import React, { useState, useEffect } from "react";
import { Container, Message, Rating } from "semantic-ui-react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Container>
      <br/>
        <Message>
          <Message.Header>Remember That You Can</Message.Header>
          <p>
            Resize your window and your inner window width will update
            dynamically. Just drag or push your window!
          </p>
          <p>{windowWidth} pixels</p>
        </Message>
        <Rating maxRating={5} defaultRating={5} icon="star" size="massive" />
      </Container>
    </>
  );
};

export default App;
