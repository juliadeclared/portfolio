import React, { useRef } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useStore } from '../utils/Context';

export default function InfiniteScroll() {
  const { matches } = useStore();
  const constraintsRef = useRef(null);

  const portfolioStack = [
    {
      scale: 1.2,
      x: 50,
      y: 0,
      xx: 60,
      yy: 50,
      name: 'Express JS',
      img: 'expressjs_icon.png',
    },
    {
      scale: 1,
      x: 400,
      y: -150,
      xx: -10,
      yy: -70,
      name: 'Node JS',
      img: 'node_icon.png',
    },
    {
      scale: 1.3,
      x: 240,
      y: -175,
      xx: 125,
      yy: -140,
      name: 'React JS',
      img: 'react_icon.png',
    },
    {
      scale: 0.8,
      x: 500,
      y: -300,
      xx: 220,
      yy: -205,
      name: 'Git / GitHub',
      img: 'git_icon.png',
    },
    {
      scale: 1.1,
      x: 390,
      y: -325,
      xx: 210,
      yy: -150,
      name: 'Firebase',
      img: 'firebase_icon.png',
    },
    {
      scale: 0.6,
      x: 190,
      y: -450,
      xx: 150,
      yy: -270,
      name: 'CSS',
      img: 'css_icon.png',
    },
    {
      scale: 0.8,
      x: 240,
      y: -960,
      xx: 80,
      yy: -280,
      name: 'Framer Motion',
      img: 'framer_icon.png',
    },
    {
      scale: 0.9,
      x: 40,
      y: -850,
      xx: 0,
      yy: -380,
      name: 'Material UI',
      img: 'material_ui_icon.png',
    },
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
            <Typography variant="h3">Kitten Scroll | </Typography>
            <Typography variant="h4"> | Full Stack SDE</Typography>
          </Grid>
          {matches && <br />}
          <Typography variant="h6">
            Pinterest-style infinite scroll functionality, with Spotify-inspired
            styling.
          </Typography>
          <br />
          <Typography variant="h6">
            Stack: Express JS, Node JS, React JS, Git / GitHub, Firebase, CSS,
            Framer Motion, Material UI
          </Typography>
          <br />
          <Button
            variant="outlined"
            href="https://github.com/juliadeclared/infinite-scroll-challenge"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            href="https://www.youtube.com/watch?v=K8FRpNAqhB8"
            target="_blank"
          >
            Demo
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            height: matches ? '200px' : '450px',
            minWidth: matches ? '100%' : 'auto',
          }}
          ref={constraintsRef}
        >
          {portfolioStack.map((icon) => {
            return (
              <Grid item container key={icon.name}>
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

      <Grid item container direction="column" align="center">
        <motion.img
          src={process.env.PUBLIC_URL + '/KS_top_page.png'}
          alt="dashboard"
          className="laptopImg"
          whileHover={{
            scale: 1.4,
            transition: {
              type: 'spring',
              delay: 0,
              duration: 5,
            },
          }}
        />
        <motion.img
          src={process.env.PUBLIC_URL + '/KS_pin.png'}
          alt="gameplay"
          className="laptopImg"
          whileHover={{
            scale: 1.4,
            transition: {
              type: 'spring',
              delay: 0,
              duration: 5,
            },
          }}
        />
        <motion.img
          src={process.env.PUBLIC_URL + '/KS_comments.png'}
          alt="stats"
          className="laptopImg"
          whileHover={{
            scale: 1.4,
            transition: {
              type: 'spring',
              delay: 0,
              duration: 2,
            },
          }}
        />
        <motion.img
          src={process.env.PUBLIC_URL + '/KS_search.png'}
          alt="stats"
          className="laptopImg"
          whileHover={{
            scale: 1.4,
            transition: {
              type: 'spring',
              delay: 0,
              duration: 2,
            },
          }}
        />
      </Grid>
    </>
  );
}
