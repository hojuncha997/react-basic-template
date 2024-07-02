import navConfig from "./nav-config";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV } from "../../../config-global";
import styled from "styled-components";
import useResponsive from "../../../hooks/useResponsive";

const NavContainer = styled.div`
  display: ${(props) => (props.openNav ? "block" : "none")};
  position: fixed; /* 모바일 환경에서 화면에 표시되도록 고정 */
  top: 0;
  left: 0;
  width: ${NAV.W_DASHBOARD}px;
  height: 100vh;
  border-right: 1px solid black;
  overflow-y: auto;
  background-color: white;
  z-index: 1200;

  @media (min-width: 768px) {
    position: static; /* 데스크탑 환경에서는 고정 해제 */
    display: block;
  }
`;

/*
  화면 너비가 줄어들었을 때 네비게이션바가 안 보이는 것은 기본적으로 미디어쿼리로 인한 것이다.
  다른 곳에서는 핸들러를 사용하여 openNav 상태를 변경하여 네비게이션 바를 열거나 닫는다.

*/




const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  padding: 8px 16px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export function NavVertical({ openNav, onCloseNav }) {
  const [refresh, setRefresh] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
//   const { width, height } = useResponsive();

  
  
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);   // pathname이 변경될 때마다 실행. pathname이 변경되면 openNav가 true이면 닫아줌

  useEffect(() => {
    console.log("openNav: ", openNav);
  }, [openNav]);

  const handleNavigate = (path) => {
    setRefresh(!refresh);
    navigate(path);
  };

  return (
    <NavContainer openNav={openNav}>
      <NavList>
        {navConfig.map((item, index) => (
          <li key={index}>
            <h3>{item.subheader}</h3>
            <NavList>
              {item.items.map((navItem, index) => (
                <NavItem
                  key={index}
                  onClick={() => handleNavigate(navItem.path)}
                >
                  {navItem.title}
                </NavItem>
              ))}
            </NavList>
          </li>
        ))}
      </NavList>
    </NavContainer>
  );
}
