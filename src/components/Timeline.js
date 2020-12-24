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
              Netflix, or Apple (App Store &amp; iTunes) gift card issued on January 16th..but wait, there's more.
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
              Each ticket gives you 3 entries of your choice into a raffle of <b>10</b> different prizes, with a combined value of over <b>$3,000</b>.{" "}
              Winners will be announced at 9PM EST on January 16th. Check out the raffle prizes{" "}
              <Link to="/ticket" className={classes.underlined}>
                here
              </Link>
              . Unsure of what to choose? Take our{" "}
              <Link to="/quiz" className={classes.underlined}>
                quiz
              </Link>
              {" "}to find out!
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
                Photo Contest
              </Link>{" "}
              to win up to <b>$500</b> in Visa gift cards!
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
              hop on the <b>Cannonball 2T1 Discord</b> event (details to be
              emailed)!
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
