import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #52616b;
  color: #f2f2f2;
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

export const LogoContainer = styled.div`
  width: 250px;
  height: 100%;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BtnContainer = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
`;

export const BaseButtonStyles = `
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  ${BaseButtonStyles}
  background: #f2f2f2;
  color: #52616b;
`;

export const SignUpBtn = styled.button`
  ${BaseButtonStyles}
  background: #c9d6df;
`;

export const SearchBtn = styled.button`
  ${BaseButtonStyles}
  background: #ff5733;
  color: #f2f2f2;
  margin: 0 10px;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #f2f2f2;
  color: #52616b;
`;
