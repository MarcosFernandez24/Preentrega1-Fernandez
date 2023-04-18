import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./item.module.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Item = ({ Elementos }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      container-spacing={4}
    >
      <Grid item xs={2}>
        <Card className={styles.separarCards}>
          <CardMedia sx={{ height: 200 }} image={Elementos.imgSrc} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Elementos.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
            {Elementos.precio} USD$
          </CardContent>
          <CardActions>
            <Link to={`/itemDetail/${Elementos.id}`}>
              <Button size="small" color="error">
                Detalles
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Item;
