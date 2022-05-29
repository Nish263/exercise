import React from "react";
import { Container } from "react-bootstrap";
import { TopNav } from "./TopNav";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <TopNav />
      {/* dynamic page */}
      <main className="main">
        <Container>{children}</Container>
      </main>
      {/* footer */}
      <footer className="footer bg-dark text-light py-5 text-center">
        &copy right all reserved by Nisha Paudel Pandey 😊 !!!!
      </footer>
    </div>
  );
};
