import React from "react";
import styled from "styled-components";
import { getHeader, getCollapseIcon } from "@mui-treasury/layout";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import { useGoogleAvatarStyles } from "@mui-treasury/styles/avatar/google";
import {
  makeStyles,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Avatar,
} from "@material-ui/core";
import {
  Menu,
  Search,
  ArrowDropDown,
  Info,
  Apps,
  HelpOutline,
} from "@material-ui/icons";

const Header = getHeader(styled);
const CollapseIcon = getCollapseIcon(styled);

const useStyles = makeStyles({
  collapsc: {
    marginLeft: -12,
    marginRight: 4,
  },
  logo: {
    height: 40,
  },
  toolbar: {
    backgroundColor: "#fff",
    boxShadow: "inset 0 -1px 0 rgba(100, 121, 143, 0.122)",
  },
  searchInput: {
    backgroundColor: "#f1f3f4",
    borderRadius: "8px",
    height: "48px",
    padding: "0px 8px",
    flexGrow: 1,
    maxWidth: 720,
  },
  searchBox: {
    minWidth: "auto",
    maxWidth: "100%",
  },
});

export const AppHeader = () => {
  const styles = useStyles();
  const actionStyles = useSizedIconButtonStyles({
    padding: "8px",
    childSize: "20px",
  });
  const gusterStyles = useRowGutterStyles({ size: 8 });
  const tinyGusterStyles = useRowGutterStyles({ size: 2, after: 10 });
  const avatarStyles = useSizedIconButtonStyles({ padding: 4, childSize: 30 });
  const googleAvatarStyles = useGoogleAvatarStyles({  ringSize: 48 });

  return (
    <Header>
      <Toolbar className={styles.toolbar}>
        <Box width={238} display={"flex"} alignItems="center">
          <CollapseIcon className={styles.collapsc} sidebarId="primarySidebar">
            {() => <Menu />}
          </CollapseIcon>
          <img
            className={styles.logo}
            alt=""
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          />
        </Box>
    
          <InputBase
            placeholder="Search email"
            className={styles.searchInput}
            startAdornment={
              <IconButton
                className={gusterStyles.adjacent}
                classes={actionStyles}
              >
                <Search />
              </IconButton>
            }
            endAdornment={
              <IconButton classes={actionStyles}>
                <ArrowDropDown />
              </IconButton>
            }
          />
   
        <Box
          className={tinyGusterStyles.parent}
          display={"flex"}
          alignItems="center"
          ml='auto'
        >
          <IconButton classes={actionStyles}>
            <HelpOutline />
          </IconButton>
          <IconButton classes={actionStyles}>
            <Apps />
          </IconButton>
        </Box>
        <Box ml={0.5} mr={-1.5} >
          <IconButton classes={avatarStyles}  className={googleAvatarStyles.root} >
            <Avatar
              alt=""
              src="https://lh3.googleusercontent.com/ogw/ADea4I7_2pz5kwJL3ycNsTXSy0evXcD8Co0cEfmT5q6d2g=s64-c-mo"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </Header>
  );
};
