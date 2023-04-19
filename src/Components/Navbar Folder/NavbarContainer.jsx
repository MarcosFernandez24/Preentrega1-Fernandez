import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
import NavListDrawer from "./NavListDrawer";
import { Button, Drawer } from "@mui/material";
import { GiHangingSpider } from "react-icons/gi";

const NavbarContainer = ({setOpen, open, categoryList}) => {
  return (
    <div className={styles.navbarContainer}>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        <GiHangingSpider className={styles.spider} />
      </Button>
      <Drawer open={open} anchor="top" onClose={() => setOpen(false)}>
        <NavListDrawer categoryList={categoryList} />
      </Drawer>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default NavbarContainer;
