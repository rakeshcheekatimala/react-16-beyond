import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "./../../context/usercontext";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WidthDraw() {
  const classes = useStyles();
  let { widthDraw } = useContext(UserContext);
  const TENTHOUSAND = 10000,
    FIVETHOUSAND = 50000;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Would you like to withdraw amount from your bank ?
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            widthDraw(TENTHOUSAND);
          }}
        >
          10000
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            widthDraw(FIVETHOUSAND);
          }}
        >
          5000
        </Button>
      </CardActions>
    </Card>
  );
}
