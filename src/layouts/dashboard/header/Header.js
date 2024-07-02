import styled from "styled-components";
import { useEffect, useState } from "react";
import useResponsive from "../../../hooks/useResponsive";

const HeaderContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 16px;
`;

const Header = ({ onOpenNav }) => {

    const { width, height } = useResponsive();

//   const [isDesktop, setIsDesktop] = useState(width > 768);

  return (
    <HeaderContainer>
      {/* {isDesktop ? <h1>desktop</h1> : <h1 onClick={onOpenNav}>iii</h1>} */}
      {width > 768 ? <h1>desktop</h1> : <h1 onClick={onOpenNav}>iii</h1>}
      <h1>Header</h1>
    </HeaderContainer>
  );
};

export default Header;
