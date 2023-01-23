import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { VscFeedback } from "react-icons/vsc";
import { CgUserList, CgHome } from "react-icons/cg";
import { GoLaw } from "react-icons/go";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineManageAccounts, MdOutlineContactMail } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import Home from "../components/Admin/Home/Home";
import UserList from "../components/Admin/UserList/UserList";
import Mails from "../components/Admin/Mails/Mails";
import Feedbacks from "../components/Admin/FeedBacks/FeedBacks";
import Messages from "../components/Admin/Messages/Messages";
import Manage from "../components/Admin/Manage/Manage";
import Reports from "../components/Admin/Reports/Reports";
import Legalities from "../components/Admin/Legalities/Legalities";
import ContactList from "../components/Admin/ContactList/ContactList";
import icon from "../components/icons/logo.png";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavigationPanel() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [MenuData, setMenuData] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={4}
          sx={{ backgroundColor: "#000aa0", color: "2f2f2f" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onMouseOver={() => {
                setOpen(!open);
              }}
              edge="start"
              // sx={{
              //   marginRight: 5,
              //   ...(open && { display: "none" }),
              // }}
            >
              <img src={icon} height="40" />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin Board
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              "Home",
              "User List",
              "Mails",
              "Feedbacks",
              "Messages",
              "Manage",
              "Reports",
              "Legalities",
              "Contact List",
            ].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => setMenuData(text)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index === 0 ? <CgHome /> : ""}
                    {index === 1 ? <CgUserList /> : ""}
                    {index === 2 ? <RiMailSendLine /> : ""}
                    {index === 3 ? <VscFeedback /> : ""}
                    {index === 4 ? <TiMessages /> : ""}
                    {index === 5 ? <MdOutlineManageAccounts /> : ""}
                    {index === 6 ? <TbReport /> : ""}
                    {index === 7 ? <GoLaw /> : ""}
                    {index === 8 ? <MdOutlineContactMail /> : ""}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {MenuData === "Home" && <Home />}
          {MenuData === "User List" && <UserList />}
          {MenuData === "Mails" && <Mails />}
          {MenuData === "Feedbacks" && <Feedbacks />}
          {MenuData === "Messages" && <Messages />}
          {MenuData === "Manage" && <Manage />}
          {MenuData === "Reports" && <Reports />}
          {MenuData === "Legalities" && <Legalities />}
          {MenuData === "Contact List" && <ContactList />}
        </Box>
      </Box>
    </>
  );
}
