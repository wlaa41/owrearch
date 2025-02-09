"use client";

import Navbar from "@/components/Layout/Navbar";
import Container from "./_components/container";
import AreasCoveredList from "@/components/coverdArea/AreasCoveredList";
import Footer from "@/components/Layout/Footer";
import Feedback from "@/components/Common/Feedback";

export default function Index() {

  return (
    <>
    <Navbar/>
    <section className="intro-blog-mainh1-container pt-80">
      <main className="pt-80">
        <Container>
          <h1 className="pt-80">
            Wellcome to London
          </h1>
          <Feedback/>
          </Container>
          <AreasCoveredList/>
          <Footer/>

      </main>
    </section>
    </>
  );
}
