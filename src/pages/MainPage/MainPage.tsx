import React from "react";
import Container from "../../components/Container/Container.tsx";
import Navbar from "../../sections/Navbar/Navbar.tsx";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper.tsx";
import Home from "../../sections/Home/Home.tsx";
import About from "../../sections/About/About.tsx";
import Projects from "../../sections/Projects/Projects.tsx";
import Contact from "../../sections/Contact/Contact.tsx";

const MainPage = () => {
  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <Home />
        <About />
        <Projects />
        <Contact />
      </ContentWrapper>
    </Container>
  );
};

export default MainPage;
