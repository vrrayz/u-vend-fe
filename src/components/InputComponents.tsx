import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

export const FormSection = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`;

export const StyledInput = styled.input`
  border: 1.08px solid #dae0e6;
  border-radius: 6.47px;
  display: block;
  width: 100%;
  padding: 12.93px 17.25px;
`;

export const StyledTextArea = styled.textarea`
  border: 1.08px solid #dae0e6;
  border-radius: 6.47px;
  display: block;
  width: 100%;
  padding: 12.93px 17.25px;
`;

export const OtpInput = () => {
  const [inputs, setInputs] = useState<number[]>(Array(4).fill(null));
  const itemsRef = useRef<Map<number, HTMLInputElement | null> | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setInputs(
      inputs.map((el, i) => {
        if (i === index) {
          // Extra logic for keeping it to single digits
          let currentValue = event.currentTarget.value;
          if (el !== null) {
            const previousValue = el.toString();
            currentValue = currentValue.replace(previousValue, "");
          }
          return Number(currentValue);
        }
        return el;
      })
    );
    nextInputFocus(index);
  };

  const nextInputFocus = (index: number) => {
    const map = getMap();
    if (index < inputs.length - 1) {
      const node = map.get(index + 1); // select the next form input
      node?.focus();
    }
  };
  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };
  return (
    <OtpContainer className="mulish text-center">
      {inputs.map((el, i) => (
        <StyledInput
          type="number"
          max={9}
          className="mb-4"
          key={i}
          ref={(node) => {
            const map = getMap();
            node ? map.set(i, node) : map.delete(i);
          }}
          onChange={(event) => handleChange(event, i)}
          value={el === null ? "" : el.toString()}
        />
      ))}
    </OtpContainer>
  );
};

const OtpContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 43px;

  ${StyledInput} {
    padding: 12.93px 20px;
    font-size: 29.58px;
    font-weight: 800;
  }
`;
