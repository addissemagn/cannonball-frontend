import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import style from '../styles/theme';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    fontFamily: "IBM Plex Sans",
  },
  red: {
    backgroundColor: style.colors.red,
  },
  underlined: {
    borderBottom: `1px dotted #000`,
  },
  oppositeContent: {
    flex: (props) => props.mobileSize ? 0 : 1,
  },
  title: {
    fontFamily: 'Aclonica',
  }
}));

export default function CustomizedTimeline() {
  const mobileSize = window.matchMedia("(max-width: 512px)").matches
  const classes = useStyles({ mobileSize });

  return (
    <Timeline align={mobileSize ? "left" : "alternate"}>
      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
        ></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.red}>
            <CardGiftcardIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.title}>
              $25 Gift Card
            </Typography>
            <Typography>
              With your $25 ticket, you get your choice of a $25 Uber Eats,
              Netflix, or Apple gift card as well as the chance to...
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
        ></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.red}>
            <MonetizationOnIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.title}>
              Win Raffle Prizes
            </Typography>
            <Typography>
              <b>10</b> prizes ranging from $100 gift cards and Bike Share memberships to $200 Charity Donations. <b>3</b> of each up for grabs, <b>$3,000</b> in total value! Check em out{" "}
              <Link to="/ticket" className={classes.underlined}>
                here
              </Link>
              !
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
        ></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.red}>
            <PhotoCameraIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.title}>
              Win Cash Prizes
            </Typography>
            <Typography>
              Show us what your Cannonball adventure looks like in the{" "}
              <Link to="/contest" className={classes.underlined}>
                <b>Photo Contest</b>
              </Link>{" "}
              to win up to $500 in Visa gift cards.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
        ></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.red}>
            <SupervisedUserCircleIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.title}>
              Choose Your Own Adventure
            </Typography>
            <Typography>
              Get dressed up with your roomates, snuggle up and watcha movie, or
              hop on the <b>Cannonball 2T1 Discord</b> call (details to be
              emailed)!
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
