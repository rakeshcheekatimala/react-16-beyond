import React, { useContext } from "react";
import { UserContext } from "../../context/usercontext";
import { Layout } from "./../../common";
import { WidthDraw } from "./../../components";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

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
  containerPadding: {
    padding: "1rem",
  },
});

const AccountBalance = (props) => {
  const classes = useStyles();
  let userContext = useContext(UserContext);
  let {
    USER: { name, totalAmount },
  } = userContext.user;
  console.log("user context is ", userContext);
  return (
    <Layout>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.containerPadding}>
          <Typography className={classes.title} gutterBottom>
            The username is {name}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            The Balance is ${totalAmount}
          </Typography>
        </CardContent>
        <div className={classes.containerPadding}>
          <WidthDraw />
        </div>
      </Card>
    </Layout>
  );
};

export default AccountBalance;
