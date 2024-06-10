import React from "react";
import Container from "../../components/Container/Container.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper.tsx";

const MainPage = () => {
    return (
      <Container>
        <Navbar />
        <ContentWrapper />
      </Container>
    );
  };
  
  export default MainPage;