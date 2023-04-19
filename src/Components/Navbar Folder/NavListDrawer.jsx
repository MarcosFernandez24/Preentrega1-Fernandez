import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const NavListDrawer = ({ categoryList }) => {
  return (
    <Box sx={{ width: 2 }}>
      <nav>
        <List>
          <ListItem>
            <ListItemText
              primary="ECcommplay"
              className={styles.eccommplayLogo}
            />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ul className={styles.containerList}>
              {categoryList.map((categoria) => {
                return (
                  <Link key={categoria.id} to={categoria.path}>
                    {categoria.titulo}
                  </Link>
                );
              })}
              <Link to="/soporte">
                <li>Soporte</li>
              </Link>
            </ul>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
