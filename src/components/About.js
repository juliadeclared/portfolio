import React from 'react';
import { Dialog, Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  hidden2: {
    opacity: 0,
    y: '100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      // delay: 0.5,
    },
  },
};

export default function About({ openAbout, setOpenAbout }) {
  return (
    <Dialog
      open={openAbout}
      onBackdropClick={() => setOpenAbout(false)}
      onEscapeKeyDown={() => setOpenAbout(false)}
      maxWidth="md"
    >
      <Grid container direction="column">
        <motion.img
          src={process.env.PUBLIC_URL + '/profileImage.png'}
          alt="Profile"
          className="profileImage"
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
        />
        <br />
        <motion.div
          variants={aboutVariants}
          initial="hidden2"
          animate="visible"
        >
          <Typography variant="h2" align="center">
            About Me
          </Typography>
          <Typography variant="h6">
            <i>TL;DR:</i><br />My name is Julia, and I am a Software Engineer and founder of the
            first fully vegan and gluten-free creperie in New York —{' '}
            <a
              href="https://www.littlechoc.nyc/"
              rel="noreferrer"
              target="_blank"
            >
              Little Choc Apothecary
            </a>
            . I’m currently working at Etsy (which is an absolute dream), and
            before that I was at Twitter 1.0.
          </Typography>
          <br />
          <Typography variant="h6">
            <i>The long story:</i><br />I built my restaurant from the ground up in 2014, and am proud to
            say that it has been a Brooklyn gem for over 8 years. What I love
            most about running a business is finding creative ways to solve
            obscure problems, and designing optimized systems to streamline
            workflows and increase productivity. I love empowering my staff with
            tools and techniques to succeed at their tasks, without having to
            micromanage them.
          </Typography>
          <br />
          <Typography variant="h6">
            When the pandemic forced Little Choc to shut down for two months, I
            decided to turn lemons into lemon crepes, and took the opportunity
            to explore some of my other talents and long-standing passions, like
            learning to code. Pursuing my interest further, I applied and was
            accepted to the Web Development Fellowship scholarship program at
            Fullstack Academy.
          </Typography>
          <br />
          <Typography variant="h6">
            Going through this immersive program was a challenging,
            intellectually stimulating, and rewarding experience. I discovered
            that to succeed as an engineer, I have to flex all the muscles I
            already love to use—curiosity, creativity, problem-solving, and
            eagerness to learn. I fall even more in love with development daily,
            and I’m looking forward to continuing to tackle exciting challenges
            as a Software Engineer.
          </Typography>
          <br />
          <br />
          <Typography variant="h6">
            Answer to the "two truths and a lie" game from my GitHub{' '}
            <a
              href="https://github.com/juliadeclared/portfolio"
              rel="noreferrer"
              target="_blank"
            >
              README
            </a>
            : I was never a semi-pro surfer! I am awful at surfing, actually.
            That doesn't stop me from continuing to try, though! Send me a
            message if you have surfing tips, or want to chat about a fun
            project!
          </Typography>
        </motion.div>
      </Grid>
    </Dialog>
  );
}
