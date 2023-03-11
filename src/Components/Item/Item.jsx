import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./item.module.css";
import { Link } from "react-router-dom";

const Item = ({ Elementos }) => {
  return (
    <Card
      sx={{ maxWidth: 200, maxHeight: 300 }}
      className={styles.separarCards}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={Elementos.imgSrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Elementos.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
        {Elementos.precio} USD$
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${Elementos.id}`} x>
          <Button size="small" color="error">
            Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
