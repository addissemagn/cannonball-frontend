import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import {
  Table as MaterialTable,
  TableCell as MaterialCell,
  TableRow as MaterialRow,
} from "@material-ui/core";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';


import style from '../styles/theme';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: '20px',
  },
  paper: {
    padding: "40px 60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: 'white',
    borderRadius: "15px",
    // boxShadow: "0px 10px 40px 0px rgba(0, 0, 0, 0.1)",
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      background: "rgba(255, 255, 255, 0.5)",
      marginTop: "40px",
      padding: '30px',
      boxShadow: "none",
    },
    '& svg' :{
      height: '120px',
      margin: 0,
    },
  },
  title: {
    fontFamily: "Aclonica",
    fontSize: "30px",
    textAlign: 'center',
    color: style.colors.red,
    margin: '20px 0',
    // ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
    //   fontSize: "24px",
    // },
  },
  table: {
    fontFamily: "IBM Plex Sans",
    '& svg' :{
      height: '30px',
      margin: 0,
    },
  },
  header: {
  }
}));

const Table = withStyles((theme) => ({
  root: {
    boxShadow: 'none',
    border: 'none',
  },
}))(MaterialTable);

const TableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    textAlign: 'center',
    border: 'none',
  },
}))(MaterialCell);

const TableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(MaterialRow);

const UserTable = ({ users }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell>#</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Preferred Email</TableCell>
            <TableCell>UofT Email</TableCell>
            <TableCell>Gift Card</TableCell>
            <TableCell>Raffles</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Payment Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.firstName}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.lastName}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.emailuoft}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.gift}
              </TableCell>
              <TableCell component="th" scope="row">
                {Object.keys(user.raffle).filter((key) => user.raffle[key] === true).map((key) => (
                    `${key}, `
                ))}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.paymentSuccess ? <CheckCircleIcon style={{ color: style.colors.green }}/> : <CancelIcon style={{ color: style.colors.red }}/>}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.lastModified}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const AdminDashboardContainer = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const fetchAllUsers = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
                method: "GET",
            });

            const users = await res.json();
            setUsers(users);
        } catch (err) {
            console.log(err);
        }
    }
    fetchAllUsers();
  }, [setUsers]);

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.title}>
            Admin Dashboard
        </Typography>
        <Grid container spacing={2} className={classes.grid}>
            <UserTable users={users} />
        </Grid>
      </div>
    </Container>
  );
};

export default AdminDashboardContainer;
