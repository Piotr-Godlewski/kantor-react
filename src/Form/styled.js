import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: ${({theme}) => theme.color.white};
  border-radius: 20px;
  margin: 20px;
  padding: 10px;
  text-align: center;
`;

export const ErrorContainer = styled.div`
  background-color: ${({theme}) => theme.color.white};
  color: ${({theme}) => theme.color.red};
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
  color: ${({theme}) => theme.color.teal};
  padding: 10px;
  font-size: 22px;
  font-weight: bold;
`;

export const LoadingHeader = styled.header`
  color: ${({theme}) => theme.color.teal};
  padding: 10px;
  font-size: 18px;
  text-align: left;
`;

export const Paragraph = styled.p`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const LabelText = styled.span`
  margin: 10px;
  max-width: 200px;
  display: inline-block;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    justify-self: center;
  }
`;

export const FormField = styled.input`
  border: 2px solid ${({theme}) => theme.color.gray};
  border-radius: 5px;
  width: 100%;
  padding: 5px;
`;

export const Button = styled.button`
  color: ${({theme}) => theme.color.white};
  border: none;
  border-radius: 5px;
  width: 100%;
  display: block;
  margin: 10px auto;
  padding: 5px;
  background-color: ${({theme}) => theme.color.cadetblue};
  font-size: 18px;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
    transition: 1.5s;
  }

  &:active {
    filter: brightness(90%);
    transition: 0.5s;
  }
`;

export const Footer = styled.footer`
  font-size: 11px;
`;