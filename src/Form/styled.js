import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  margin: 20px;
  padding: 10px;
  text-align: center;
`;

export const StyledForm = styled.form`
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
`;

export const Header = styled.header`
  color: teal;
  padding: 10px;
  font-size: 22px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const LabelText = styled.span`
  margin: 10px;
  max-width: 200px;
  display: inline-block;

  @media (max-width: 767px) {
    justify-self: center;
  }
`;

export const FormField = styled.input`
  border: 2px solid #888;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
`;

export const Button = styled.button`
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  display: block;
  margin: 10px auto;
  padding: 5px;
  background-color: cadetblue;
  font-size: 18px;

  &:hover {
    background-color: hsl(182, 25%, 60%);
    transform: scale(1.05);
    transition: 1.5s;
  }

  &:active {
    background-color: hsl(182, 25%, 45%);
    transition: 0.5s;
  }
`;

export const Footer = styled.footer`
  font-size: 11px;
`;