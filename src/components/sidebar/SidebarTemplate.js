import React from "react";
import styled from "styled-components";
import SidebarList from "./SidebarList";

const Block = styled.div`
  flex-basis: 200px;
  background-color: black;
`;

function SidebarTemplate() {
  return (
    <Block>
      <SidebarList></SidebarList>
    </Block>
  );
}

export default SidebarTemplate;
