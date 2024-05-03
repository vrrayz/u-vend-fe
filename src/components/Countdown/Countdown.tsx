"use client";

import React from "react";
import { Background } from "./Background";
import styled from "styled-components";
import { Contact } from "./Contact";

const Countdown = () => {
  return (
    <main>
      <div className="lg:flex">
        <Background />
        <Contact />
      </div>
    </main>
  );
};



export default Countdown;
