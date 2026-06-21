import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Freelance from "./components/Freelance";
import ContactForm from "./components/ContactForm";

function PageBackground() {
  return (
    <div className="page-bg" aria-hidden="true">
      <div className="page-bg__orb page-bg__orb--1" />
      <div className="page-bg__orb page-bg__orb--2" />
      <div className="page-bg__orb page-bg__orb--3" />
      <div className="page-bg__grid" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/zacharia-sao-4aa20850/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/zachsao"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Zacharia Sao.
        </p>
      </div>
    </footer>
  );
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useReveal();

  return (
    <>
      <PageBackground />
      <Header />
      <main>
        <Home />
        <Freelance />
        <Portfolio />
        <Resume />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
