import React from "react";
import styled from "styled-components";
import Layout, {
  Root,
  getDrawerSidebar,
  getContent,
} from "@mui-treasury/layout";
import {
  StylesProvider,
  CssBaseline,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import AppFooter from "./components/AppFooter";
import CustomTrigger from "./components/CustomTrigger";
import { AppHeader } from "./components/AppHeader";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64,
  });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", {
      anchor: "left",
    })
    .registerPermanentConfig("xs", {
      width: 256,
      collapsible: true,
      collapsedWidth: 72,
    });

  builder.create("secondarySidebar", {
    anchor: "right",
  }).registerPersistentConfig('md', {
    width: 56,
    collapsible: false,
    persistentBehavior: "fit",
  })
});

const DrawerSidebar = getDrawerSidebar(styled);
const Content = getContent(styled);


const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});


function App() {
  return (
    <StylesProvider injectFirst>
      <Root theme={theme} scheme={scheme} initialState={{sidebar: { secondarySidebar: {open: true} }}} >
        <CssBaseline>
         <AppHeader />
          <DrawerSidebar sidebarId="primarySidebar">sideBar</DrawerSidebar>
          <Content>content</Content>
          <DrawerSidebar sidebarId="secondarySidebar">
            Right Sidebar
            </DrawerSidebar>
           <CustomTrigger />
          <AppFooter />
        </CssBaseline>
      </Root>
    </StylesProvider>
  );
}

export default App;
