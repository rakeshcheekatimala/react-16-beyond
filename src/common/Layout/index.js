import React from "react";
import Header from "./../../components/Header";
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    margin: "2rem auto",
  },
});
const Layout = (props) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.root}>{props.children}</Container>
    </>
  );
};

export default Layout;
