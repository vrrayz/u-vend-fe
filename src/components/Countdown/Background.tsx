import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export const Background = () => {
  const [timer, setTimer] = useState<string>("00:00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date().getTime();
      const launchDate = new Date("2024-05-12").getTime();
      const timeLeft = launchDate - today;

      const secondsLeft = (Math.floor(timeLeft / 1000) % 60).toLocaleString(
        "en-GB",
        { minimumIntegerDigits: 2 }
      );
      const minutesLeft = (
        Math.floor(timeLeft / (60 * 1000)) % 60
      ).toLocaleString("en-GB", { minimumIntegerDigits: 2 });
      const hoursLeft = (
        Math.floor(timeLeft / (3600 * 1000)) % 24
      ).toLocaleString("en-GB", { minimumIntegerDigits: 2 });
      const daysLeft = Math.floor(timeLeft / (24 * 3600 * 1000));
      setTimer(
        `${daysLeft.toLocaleString("en-GB", {
          minimumIntegerDigits: 2,
        })}:${hoursLeft}:${minutesLeft}:${secondsLeft}`
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <BackgroundSection className="lg:w-7/12">
      <BackgroundOverlay>
        <a href="#">
          <Image
            src={"/assets/logo.png"}
            width={150}
            height={97.66}
            alt="logo"
          />
        </a>
        <CountdownSection className="font-bold text-3xl">
          <h3 className="my-3">Countdown</h3>
          <h2 className="text-5xl my-3">{timer}</h2>
        </CountdownSection>
      </BackgroundOverlay>
    </BackgroundSection>
  );
};
const BackgroundSection = styled.div`
  // width: 100vw;
  height: 100vh;
  background: url(/assets/background_1.jpeg);
  background-position: center;
  background-size: cover;
`;

const BackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 30%);
  position: relative;
`;
const CountdownSection = styled.div`
  text-align: center;
  position: absolute;
  top: 30%;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
`;
