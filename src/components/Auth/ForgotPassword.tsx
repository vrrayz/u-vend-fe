"use client";

import React from "react";
import { ContactSection } from "../Countdown/Contact";
import { FormSection, StyledInput } from "../InputComponents";
import { Background } from "./Background";
import Image from "next/image";

export const ForgotPassword = () => {
  return (
    <>
      <Background
        backgroundImage="url(/assets/bg_forgot_password.png)"
        backgroundSize="cover"
        backgroundPosition="center"
      />
      <ContactSection className="lg:w-5/12">
      <a href="#">
        <Image src={"/assets/logo.png"} width={150} height={97.66} alt="logo" className="lg:hidden" />
      </a>
        <FormSection className="px-4">
          <h3 className="font-bold text-3xl text-center mb-4 lg:px-12">
            Forgot Password?
          </h3>
          <div>
            <label htmlFor="email">Email Address</label>
            <StyledInput
              type="email"
              placeholder="Type your email"
              className="mb-4"
            />
          </div>
          <StyledInput
            type="submit"
            value={"Send Reset Instructions"}
            className="btn bg-dodger-blue text-white mb-4 disabled:opacity-50"
            disabled
          />
          <p className="flex justify-center gap-2 mb-4">
            <span className="text-dimgray">Don&apos;t have an account?</span>
            <a
              href="/auth/register"
              className="text-darkslategray opacity-85 underline"
            >
              Sign up
            </a>
          </p>
        </FormSection>
      </ContactSection>
    </>
  );
};
