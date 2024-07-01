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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    // alert("open");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("open: ", open);
  }, [open]);

  const renderNavVertical = (
    <NavVertical openNav={open} onCloseNav={handleClose} />
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
