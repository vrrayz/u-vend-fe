"use client";

import React from "react";
import { ContactSection } from "../Countdown/Contact";
import { FormSection, OtpInput, StyledInput } from "../InputComponents";
import { BackgroundOverlay } from "./Background";
import Image from "next/image";
import styled from "styled-components";
import { BackgroundSection } from "../Countdown/Background";
import { Colors } from "../styles";

export const EmailVerify = () => {
  return (
    <>
      <CustomBackground className="hidden lg:flex flex-col lg:w-7/12">
        <BackgroundOverlay className="flex flex-col justify-end">
          <BackgroundTextSection className="text-3xl mulish">
            <a href="#">
              <Image
                src={"/assets/logo.png"}
                width={150}
                height={97.66}
                alt="logo"
              />
            </a>
            <h3 className="my-3">Your Ultimate Online Shopping Destination</h3>
            <p className="my-3">
              At Uvend, we believe that shopping should be more than just a
              transaction; it should be an experience.
            </p>
          </BackgroundTextSection>
        </BackgroundOverlay>
      </CustomBackground>
      <ContactSection className="lg:w-5/12">
        <a href="#">
          <Image
            src={"/assets/logo.png"}
            width={150}
            height={97.66}
            alt="logo"
            className="lg:hidden"
          />
        </a>
        <FormSection className="px-4">
          <h3 className="font-bold text-3xl text-center mb-4 lg:px-12">
            Verify Email
          </h3>
          <div className="mulish">
          <p className="mb-4 text-darkslategray text-center opacity-85">
            Hi there! Please enter he 4-digit code that was just sent to your
            email address <span className="font-bold">jimgarlandrr1@gmail.com</span>. Use the link below to resend
            a 4-digit code if you haven’t gotten and start organizing your
            readme documents.
          </p>
          <p className="flex justify-center gap-2 mb-4">
            <span className="text-dimgray">Didn&apos;t receive the code?</span>
            <a
              href=""
              className="text-darkslategray opacity-85 underline text-underline font-bold"
            >
              Click to resend
            </a>
          </p>
          </div>
          <div>
            <OtpInput />
          </div>
          <StyledInput
            type="submit"
            value={"Send Reset Instructions"}
            className="btn bg-dodger-blue text-white mb-4 disabled:opacity-50"
            disabled
          />
          <p className="flex justify-center gap-2 mb-4">
            <span className="text-dimgray">Got questions? email us at</span>
            <a
              href="mailto:support@uvend.com"
              className="text-dodger-blue opacity-85"
            >
                support@uvend.com
            </a>
          </p>
        </FormSection>
      </ContactSection>
    </>
  );
};
const CustomBackground = styled(BackgroundSection)`
  position: relative;

  a.logo {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const BackgroundTextSection = styled.div`
  width: 100%;
  color: ${Colors.white};
  max-width: 512px;
  margin: 0px auto;
  margin-bottom: 95px;
  h3 {
    font-size: 50px;
    line-height: 62.75px;
  }
  p {
    font-size: 20px;
    line-height: 28px;
  }
`;
