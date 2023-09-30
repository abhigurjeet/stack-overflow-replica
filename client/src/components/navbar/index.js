import { useState } from "react";
import {
  Nav,
  LogoContainer,
  Logo,
  LoginBtn,
  SignUpBtn,
  Wrapper,
  Input,
  BtnContainer,
  SearchBtn,
} from "./navbar.styles";

const Navbar = () => {
  const [searchTag, setSearchTag] = useState("");
  return (
    <Nav>
      <LogoContainer>
        <Logo src="https://cdn.discordapp.com/attachments/756066110616633404/1157748500235309136/pngwing.com.png?ex=6519bcd0&is=65186b50&hm=f1e73d26a70ce08fc417b38b369b021fc8e3139acde0eaa67bd8a607655749b2&" />
      </LogoContainer>
      <Wrapper>
        <Input
          onChange={(e) => setSearchTag(e.target.value)}
          placeholder="Search"
        />
        <SearchBtn>Search</SearchBtn>
      </Wrapper>
      <BtnContainer>
        <LoginBtn>Log In</LoginBtn>
        <SignUpBtn>Sign Up</SignUpBtn>
      </BtnContainer>
    </Nav>
  );
};

export default Navbar;
