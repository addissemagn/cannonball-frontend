import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
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

import TextInput from "../components/TextInput";
import Button from "../components/Button";

import { getCookie, eraseCookie } from "../lib/utils";
import style from '../styles/theme';


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
    margin: '0',
    marginTop: '20px',
    // ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
    //   fontSize: "24px",
    // },
  },
  subheading: {
    fontFamily: "Aclonica",
    fontSize: "20px",
    textAlign: 'center',
    color: style.colors.black,
    margin: '20px 0 20px 0',
    width: '100%'
  },
  table: {
    fontFamily: "IBM Plex Sans",
    '& svg' :{
      height: '30px',
      margin: 0,
    },
  },
  header: {
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    textAlign: 'center',
    paddingTop: '20px',
  },
  helperRed: {
    color: style.colors.red, // TODO: check if contrast is okay
  },
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
            <TableCell>Email Status</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Payment Date</TableCell>
            <TableCell>Extra Entry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user, index) => (
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
                {user.emailSuccess ? <CheckCircleIcon style={{ color: style.colors.green }}/> : <CancelIcon style={{ color: style.colors.red }}/>}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.paymentSuccess ? <CheckCircleIcon style={{ color: style.colors.green }}/> : <CancelIcon style={{ color: style.colors.red }}/>}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.lastModified}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.hasExtraEntry ? <CheckCircleIcon style={{ color: style.colors.green }}/> : <CancelIcon style={{ color: style.colors.red }}/>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const ExtraRaffleEntryTable = ({ usersWithExtraEntry }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell>#</TableCell>
            <TableCell>UofT Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersWithExtraEntry && usersWithExtraEntry.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.emailuoft}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const RafflePrizeStatsTable = ({ rafflePrizeCount }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell>Prize</TableCell>
            <TableCell>Count (paid users; excluding extra entry)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rafflePrizeCount && Object.keys(rafflePrizeCount).map((key, index) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                { key }
              </TableCell>
              <TableCell component="th" scope="row">
                { rafflePrizeCount[key] }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const LoginForm = ({ params, handleInputChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate name="login">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextInput
            required
            name="username"
            label="Username"
            value={params.username}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextInput
            required
            name="password"
            label="Password"
            value={params.password}
            onChange={handleInputChange}
            isPassword
          />
        </Grid>
      </Grid>
      <Grid className={classes.button}>
        <Button
          text="Login"
          onClick={handleSubmit}
          fullWidth
        />
      </Grid>
    </form>
  );
};

const AdminDashboardContainer = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [usersWithExtraEntry, setUsersWithExtraEntry] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [params, setParams] = useState({
    username: '',
    password: '',
  })

  const [rafflePrizeCount, setRafflePrizeCount] = useState({
    donation: 0,
    illusionarium: 0,
    bikeshare: 0,
    stores: 0,
    steam: 0,
    etsy: 0,
    amazon: 0,
    indigo: 0,
    timhortons: 0,
    bookstore: 0,
  });
  const [numUsers, setNumUsers] = useState(0)

  useEffect(() => {
    if (!loggedIn) {
      const checkLoggedIn = async () => {
        const token = getCookie("token");

        if (token) {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/admin`, {
              method: "GET",
              headers: {
                "token": token,
              },
            }
          );

          const admin = await res.json();
          if (admin.username === 'admin') setLoggedIn(true);
        }
      }

      checkLoggedIn();
    }

    if (loggedIn) {
      const fetchAllUsers = async () => {
          try {
              const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
                  method: "GET",
                  headers: {
                    "token": getCookie("token"),
                  },
              });

              const users = await res.json();

              const prizeCount = {
                donation: 0,
                illusionarium: 0,
                bikeshare: 0,
                stores: 0,
                steam: 0,
                etsy: 0,
                amazon: 0,
                indigo: 0,
                timhortons: 0,
                bookstore: 0,
              };
              let userCount = 0;

              for (var i = 0; i < users.length; i ++ ){
                // check if user has extra raffle entry
                const res2 = await fetch(`${process.env.REACT_APP_API_URL}/raffle/email/${users[i].emailuoft}`, {
                  method: "GET",
                });
                const hasExtraEntry = (await res2.json()).exists;

                const user = users[i];

                users[i] = {
                  ...user,
                  hasExtraEntry
                }

                if(user.paymentSuccess) {
                  userCount += 1;
                }

                for (var key in user.raffle) {
                  if (user.paymentSuccess && user.raffle[key]) {
                    prizeCount[key] += 1
                  }
                }
              }

              setRafflePrizeCount(prizeCount)
              setNumUsers(userCount)
              setUsers(users);
          } catch (err) {
              console.log(err);
          }
      }
      const fetchUsersWithExtraEntry = async () => {
          try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/users/raffle`, {
              method: "GET",
              headers: {
                token: getCookie("token"),
              },
            });

            const users = await res.json();
            setUsersWithExtraEntry(users);
          } catch (err) {
            console.log(err);
          }

      }
      fetchAllUsers();
      fetchUsersWithExtraEntry();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUsers, setUsersWithExtraEntry, loggedIn]);

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    const updatedParams = { ...params, [name]: value };
    setParams(updatedParams);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const auth = await response.json();
    console.log(auth);

    if (auth.token) {
      document.cookie = `token=${auth.token};max-age=604800;`
      setLoggedIn(true);
    }
  }

  const handleLogout = () => {
    eraseCookie("token");
    window.location.reload();
    return false;
  };

  return (
    <>
      {loggedIn && (
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <div className={classes.paper}>
            <>
              <Typography component="h1" variant="h5" className={classes.title}>
                Admin Dashboard
              </Typography>
              <Button text="Logout" onClick={() => handleLogout()} />
              <a href="#all-users">→ All Users</a>
              <a href="#raffle-entries">→ Users with Extra Raffle Entries</a>
              <a href="#raffle-stats">→ Raffle Prizes Selected Stats</a>
              <Grid container spacing={2} className={classes.grid}>
                <Typography component="h1" variant="h5" className={classes.subheading}>
                  # Paid Users: {numUsers}
                </Typography>
                <Typography id="#all-users" component="h1" variant="h5" className={classes.subheading}>
                  All Users
                </Typography>
                <UserTable users={users} />
                <Typography id="raffle-entries" component="h1" variant="h5" className={classes.subheading}>
                  Users with Extra Raffle Entries
                </Typography>
                <ExtraRaffleEntryTable usersWithExtraEntry={usersWithExtraEntry} />
                <Typography id="raffle-stats" component="h1" variant="h5" className={classes.subheading}>
                  Raffle Stats
                </Typography>
                <RafflePrizeStatsTable rafflePrizeCount={rafflePrizeCount} />
              </Grid>
            </>
          </div>
        </Container>
      )}
      {!loggedIn && (
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <>
              <Typography component="h1" variant="h5" className={classes.title}>
                Admin Login
              </Typography>
              <Grid container spacing={2} className={classes.grid}>
                <LoginForm
                  params={params}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                />
              </Grid>
            </>
          </div>
        </Container>
      )}
    </>
  );
};

export default AdminDashboardContainer;
