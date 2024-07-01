import styled from "styled-components";
import { useEffect, useState } from "react";

const HeaderContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 16px;
`;

const Header = ({ onOpenNav }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // 초기 렌더링 시 화면 크기를 한 번 체크
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      {isDesktop ? <h1>desktop</h1> : <h1 onClick={onOpenNav}>iii</h1>}
      <h1>Header</h1>
    </HeaderContainer>
  );
};

export default Header;
