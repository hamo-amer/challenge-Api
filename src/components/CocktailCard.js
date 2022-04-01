import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
});

export default function ImgMediaCard({ cocktail }) {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 300 }} className={classes.root}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image={cocktail.strDrinkThumb}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {cocktail.strDrink}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {cocktail.strInstructionsIT}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/details/${cocktail.idDrink}`}>
          <Button size='small'>Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
