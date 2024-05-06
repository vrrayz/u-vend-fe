"use client";

import React from "react";
import { BackgroundSection } from "../Countdown/Background";
import Image from "next/image";
import styled from "styled-components";

export const Background = () => {
  return (
    <CustomBackground className="hidden lg:block lg:w-7/12">
      <a href="#">
        <Image src={"/assets/logo.png"} width={150} height={97.66} alt="logo" />
      </a>
    </CustomBackground>
  );
};

const CustomBackground = styled(BackgroundSection)`
  background-image: url(/assets/bg_login.png);
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
`;
