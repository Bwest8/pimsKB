import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  margin-bottom: 1rem;
`;

const AccordionHeader = styled.h2`
  margin: 0;
`;

const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
    transition: transform 0.2s ease-in-out;
  }
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 1.25rem;
  color: #6b7280;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;

  p {
    margin-bottom: 0.5rem;
  }
`;

const Admonition = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader>
        <AccordionButton onClick={toggleAccordion} isOpen={isOpen}>
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </AccordionButton>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Admonition;