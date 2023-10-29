import React, { useState } from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoginForm = styled.form`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const InputField = styled.input`
  width: 80%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const CheckboxLabel = styled.label`
  margin-left: 10px;
`;

const RegisterMessage = styled.span`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  width: 200px;
  border: none;
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <LoginWrapper>
      <LoginForm>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <CheckboxWrapper>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <CheckboxLabel htmlFor="rememberMe">Remember Me</CheckboxLabel>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreeTerms}
            onChange={handleAgreeTermsChange}
          />
          <CheckboxLabel htmlFor="agreeTerms">
            Agree to Terms & Conditions
          </CheckboxLabel>
        </CheckboxWrapper>
        <SubmitButton type="submit">Login</SubmitButton>
        <RegisterMessage>
          Don't Have an Account? <a href="#">Register Here</a>
        </RegisterMessage>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
