"use client";

import React from "react";
import { ContactSection } from "../Countdown/Contact";
import { FormSection, StyledInput, StyledTextArea } from "../InputComponents";
import { Divider } from "../Styled";
import { GoogleLoginClient } from "./GoogleLoginClient";
import { Background } from "./Background";

export const Login = () => {
  return (
    <>
    <Background />
    <ContactSection className="lg:w-5/12">
      <FormSection className="px-4" style={{margin: '0px'}}>
        <h3 className="font-bold text-3xl text-center lg:mb-4 lg:px-12">
          Sign In
        </h3>
        <p className="text-dimgray mb-4 text-center">Welcome Back!, you have been missed</p>
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
        <div className="flex mb-4">
          <div className="flex gap-2">
            <input type="radio" /><span className="text-dimgray">Keep me logged in</span>
          </div>
          <a href="#" className="ml-4 text-dodger-blue">
            Forgot password?
          </a>
        </div>
        <StyledInput
          type="submit"
          value={"Sign In"}
          className="btn bg-dodger-blue text-white mb-4 disabled:opacity-50"
          disabled
        />
        <a href="/" className="btn bg-whitesmoke block text-center text-darkgray mb-4">Use as Guest</a>
        <p className="flex justify-center gap-2 mb-4">
          <span className="text-dimgray">Want to create an account??</span>{" "}
          <a href="/auth/register" className="text-darkslategray opacity-85 underline">
            Sign up
          </a>
        </p>
        <div className="flex justify-center gap-4">
            <Divider />
            <span className="text-darkgray">Or</span>
            <Divider />
        </div>
        <GoogleLoginClient setExtraError={function (error: string): void {
          throw new Error("Function not implemented.");
        } } setShouldRedirect={function (value: boolean): void {
          throw new Error("Function not implemented.");
        } } />
      </FormSection>
    </ContactSection>
    </>
  );
};
