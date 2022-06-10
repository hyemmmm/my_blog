import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SidebarCategory from "./SidebarCategory";

const Block = styled.div`
  ul {
    list-style: none;
    padding: 20px 10px;
  }
`;

const sidemenu = [
  { id: 1, text: "HOME", url: "/", active: true },
  { id: 2, text: "ABOUT", url: "/about", active: false },
  { id: 4, text: "POST", url: "/post", active: false },
];

function SidebarList() {
  const [state, setState] = useState(sidemenu);

  const { pathname } = useLocation();

  useEffect(() => {
    setState((state) =>
      state.map((item) =>
        item.url === pathname
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  }, [pathname]);

  return (
    <Block>
      <ul>
        {state.map((item) => {
          return <SidebarCategory data={item} key={item.id} />;
        })}
      </ul>
    </Block>
  );
}

export default SidebarList;
