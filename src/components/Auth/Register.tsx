"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { BackgroundSection } from "../Countdown/Background";
import { Colors } from "../styles";
import { GoogleLoginClient } from "./GoogleLoginClient";
import { FormSection, StyledInput } from "../InputComponents";
import { ContactSection } from "../Countdown/Contact";
import { Divider } from "../Styled";

export const Register = () => {
  return (
    <>
      <CustomBackground className="hidden lg:flex flex-col lg:w-7/12">
        <a href="#" className="logo">
          <Image
            src={"/assets/logo.png"}
            width={150}
            height={97.66}
            alt="logo"
          />
        </a>

        <RegisterTextBox className="my-auto text-center lato-bold">
          <h4>
            YOUR <span>VENDING</span> OPPORTUNITY <br /> Starts Here
          </h4>
          <h5>...Vend smart with Uvend</h5>
        </RegisterTextBox>
      </CustomBackground>

      <ContactSection className="lg:w-5/12">
        <FormSection className="px-4">
          <h3 className="font-bold text-3xl text-center lg:mb-4 lg:px-12">
            Create an Account
          </h3>
          <p className="text-dimgray mb-4 text-center">
            It only takes a minute to create your account
          </p>
          <div>
            <StyledInput
              type="text"
              placeholder="First Name"
              className="mb-4"
            />
          </div>
          <div>
            <StyledInput type="text" placeholder="Last Name" className="mb-4" />
          </div>
          <div>
            <StyledInput
              type="email"
              placeholder="Email Address"
              className="mb-4"
            />
          </div>
          <div>
            <StyledInput
              type="password"
              placeholder="Password"
              className="mb-4"
            />
          </div>

          <p className="mb-4 text-dimgray">
            By continuing, you agree to our <a href="#" className="text-dodger-blue">Terms of Services</a> and <a href="#" className="text-dodger-blue">Privacy Policy</a>
          </p>
          <StyledInput
            type="submit"
            value={"Create Account"}
            className="btn bg-dodger-blue text-white mb-4 disabled:opacity-50"
            disabled
          />
          <p className="flex justify-center gap-2 mb-4">
            <span className="text-dimgray">Aleady have an account?</span>{" "}
            <a
              href="/auth/login"
              className="text-darkslategray opacity-85 underline"
            >
              Sign In
            </a>
          </p>
          <div className="flex justify-center gap-4">
            <Divider />
            <span className="text-darkgray">Or</span>
            <Divider />
          </div>
          <GoogleLoginClient
            setExtraError={function (error: string): void {
              throw new Error("Function not implemented.");
            }}
            setShouldRedirect={function (value: boolean): void {
              throw new Error("Function not implemented.");
            }}
          />
        </FormSection>
      </ContactSection>
    </>
  );
};

const CustomBackground = styled(BackgroundSection)`
  background-image: none;
  position: relative;

  a.logo {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const RegisterTextBox = styled.div`
  font-weight: 800;

  h4 {
    font-size: 48px;
    text-transform: uppercase;
  }
  h4 span {
    color: ${Colors.cornflowerBlue};
  }

  h5 {
    font-size: 40px;
    margin-top: 12px;
  }
`;
