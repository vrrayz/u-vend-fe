import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <ContactSection className="lg:w-5/12">
      <FormSection className="px-4">
        <h3 className="font-bold text-3xl uppercase text-center lg:mb-4 lg:px-12">
          Got a message for us?
        </h3>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email address
          </label>
          <StyledInput
            type="email"
            placeholder="Type your email"
            className="mb-4"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <StyledTextArea
            cols={30}
            rows={3}
            placeholder="Text"
            className="mb-4"
          ></StyledTextArea>
        </div>
        <StyledInput
          type="submit"
          value={"Send Request"}
          className="btn bg-dodger-blue text-white mb-8"
        />
        <p className="flex">
          <span className="text-dimgray">Want to join the waitlist?</span>{" "}
          <a href="#" className="ml-4 text-dodger-blue">
            Put me on!
          </a>
        </p>
      </FormSection>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FormSection = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  border: 1.08px solid #dae0e6;
  border-radius: 6.47px;
  display: block;
  width: 100%;
  padding: 12.93px 17.25px;
`;

const StyledTextArea = styled.textarea`
  border: 1.08px solid #dae0e6;
  border-radius: 6.47px;
  display: block;
  width: 100%;
  padding: 12.93px 17.25px;
`;
