import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Content } from "./styled";


export default function Home() {
  return (
    <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      {/* <DevForm onSubmit={handleAddDev} /> */}
    </aside>

    <main>
      <ul>
        {/* {devs.map(dev => (
          <DevItem key={dev._id} dev={dev} /> */}
        ))}
      </ul>
    </main>
  </div>
  );
}
