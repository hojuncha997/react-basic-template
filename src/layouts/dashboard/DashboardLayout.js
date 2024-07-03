import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavVertical } from "./nav/NavVertical";
import Main from "./Main";
import Header from "./header/Header";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;



export default function DashboardLayout() {
  const [openNav, setOpenNav] = useState(false);

  const handleOpen = () => {
    // alert("open");
    setOpenNav(true);
  };

  const handleClose = () => {
    setOpenNav(false);
  };

  useEffect(() => {
    console.log("openNav: ", openNav);
  }, [openNav]);

  const renderNavVertical = (
    <NavVertical openNav={openNav} onOpenNav={handleOpen} onCloseNav={handleClose} />
  );

  return (
    <LayoutContainer>
      {/* <NavVertical /> */}
      {renderNavVertical}

      <ContentContainer>
        <Header onOpenNav={handleOpen} />
        <Main>
          <Outlet />
        </Main>
      </ContentContainer>
    </LayoutContainer>
  );
}
