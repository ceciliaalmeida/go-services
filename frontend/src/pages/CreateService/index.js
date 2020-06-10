import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container } from "./styled";

export default function Home() {
  return (
    <Container>
      <div className="content">
        <main>
          <h1>Seu marketplace de serviços.</h1>
          <p>
            Ajudamos pessoas a encontrarem serviços ou produtos de forma eficiente.
          </p>

          <Link to="/create-service">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um serviço</strong>
          </Link>
        </main>

      </div>
    </Container>
  );
}
