"use client";

import React from "react";
import { BackgroundSection } from "../Countdown/Background";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  backgroundPosition?: string;
  backgroundImage?: string;
  backgroundSize?: "cover" | "contain";
}

export const Background = ({
  backgroundImage,
  backgroundSize = "contain",
  backgroundPosition,
}: Props) => {
  return (
    <CustomBackground
      $backgroundImage={backgroundImage}
      $backgroundSize={backgroundSize}
      $backgroundPosition={backgroundPosition}
      className="hidden lg:block lg:w-7/12"
    >
      <a href="#">
        <Image src={"/assets/logo.png"} width={150} height={97.66} alt="logo" />
      </a>
    </CustomBackground>
  );
};

const CustomBackground = styled(BackgroundSection)<{
  $backgroundImage?: string;
  $backgroundSize?: string;
  $backgroundPosition?: string;
}>`
  background-image: ${(props) =>
    props.$backgroundImage || `url(/assets/bg_login.png)`};
  background-position: ${(props) => props.$backgroundPosition || `bottom`};
  background-size: ${(props) => props.$backgroundSize || `contain`};
  background-repeat: no-repeat;
`;
