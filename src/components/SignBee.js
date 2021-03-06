import React, { useRef } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useStore } from '../utils/Context';

import ProjectScreenshots from './ProjectScreenshots';

export default function SignBee() {
  const { matches } = useStore();
  const constraintsRef = useRef(null);

  const signBeeStack = [
    {
      scale: 1.2,
      x: 50,
      y: 0,
      xx: 50,
      yy: 50,
      name: 'TensorFlow JS',
      img: 'tensorflow_icon.png',
    },
    {
      scale: 1,
      x: 400,
      y: -150,
      xx: 110,
      yy: 40,
      name: 'Node JS',
      img: 'node_icon.png',
    },
    {
      scale: 1.3,
      x: 240,
      y: -175,
      xx: 25,
      yy: -10,
      name: 'React JS',
      img: 'react_icon.png',
    },
    {
      scale: 0.8,
      x: 500,
      y: -300,
      xx: -10,
      yy: -210,
      name: 'Git / GitHub',
      img: 'git_icon.png',
    },
    {
      scale: 1.1,
      x: 390,
      y: -325,
      xx: 125,
      yy: -250,
      name: 'Firebase',
      img: 'firebase_icon.png',
    },
    {
      scale: 0.6,
      x: 240,
      y: -800,
      xx: 180,
      yy: -205,
      name: 'CSS',
      img: 'css_icon.png',
    },
    {
      scale: 0.5,
      x: 190,
      y: -600,
      xx: 220,
      yy: -350,
      name: 'HTML',
      img: 'html_icon.png',
    },
    {
      scale: 0.9,
      x: 40,
      y: -850,
      xx: 200,
      yy: -500,
      name: 'Material UI',
      img: 'material_ui_icon.png',
    },
  ];

  const sbPhoneImages = [
    '/iphone_dashboard.png',
    '/iphone_gameplay.png',
    '/iphone_stats.png',
  ];

  return (
    <>
      <Grid container direction={matches ? 'column' : 'row'}>
        <Grid item container direction="column" xs={matches ? 11 : 6}>
          <br />
          <Grid
            item
            container
            alignItems="baseline"
            justify={matches ? 'center' : 'flex-start'}
          >
            <Typography variant="h3">SignBee |</Typography>
            <Typography variant="h4">| Full Stack SDE</Typography>
          </Grid>
          {matches && <br />}
          <Typography variant="h6">
            American Sign Language (ASL) teaching app akin to Duolingo. A
            progressive web application allowing users to learn the ASL alphabet
            through gameplay.
          </Typography>
          <br />
          <Typography variant="h6">
            Stack: TensorFlow JS, Node JS, React JS, Git / GitHub, Firebase,
            CSS, HTML, Material UI
          </Typography>
          <br />
          <Typography variant="h5">
            Team: Julia Kravets, Leon Zhao, Naomi Diaz and Goncagul "Gloria" Ay
          </Typography>
          <br />
          <Grid item align="center">
            <Button href="https://signbee-79d6e.web.app/" target="_blank">
              Play
            </Button>
            <Button
              variant="outlined"
              href="https://github.com/2011-team-heights100/SignBee"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              href="https://www.youtube.com/watch?v=Me-NddzkNp8"
              target="_blank"
            >
              Demo
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            height: matches ? '210px' : '450px',
            minWidth: matches ? '100%' : 'auto',
          }}
          ref={constraintsRef}
        >
          {signBeeStack.map((icon) => {
            return (
              <Grid item container key={icon.name} direction="row">
                <motion.div
                  className="iconBg"
                  drag
                  dragConstraints={constraintsRef}
                  whileHover={{
                    scale: 1.4,
                    transition: {
                      type: 'spring',
                      delay: 0,
                      duration: 5,
                    },
                  }}
                  initial={{
                    opacity: 0,
                    x: '100vw',
                  }}
                  animate={{
                    opacity: 1,
                    x: matches ? icon.xx : icon.x,
                    y: matches ? icon.yy : icon.y,
                    scale: matches ? 1 : icon.scale,
                    transition: {
                      type: 'spring',
                      delay: Math.random(),
                    },
                  }}
                >
                  <motion.img
                    src={`${process.env.PUBLIC_URL}/stackIcons/${icon.img}`}
                    alt={icon.img.slice(0, icon.img.length - 4)}
                    className="stackIcon"
                  />
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matches ? 'column' : 'row'}
        align="center"
      >
        <ProjectScreenshots imageArr={sbPhoneImages} cssClass="iphoneImg" />
      </Grid>
    </>
  );
}
