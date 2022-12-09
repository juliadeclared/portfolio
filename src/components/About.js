import React from "react";
import { Dialog, Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const aboutVariants = {
	hidden: {
		opacity: 0,
		y: "-100vh",
	},
	hidden2: {
		opacity: 0,
		y: "100vh",
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
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
            My name is Julia, and I am a Software Engineer and founder of the
            first fully vegan and gluten-free creperie in New York —{' '}
            <a
              href="https://www.littlechoc.nyc/"
              rel="noreferrer"
              target="_blank"
            >
              Little Choc Apothecary
            </a>
            .
          </Typography>
          <br />
          <Typography variant="h6">
            I built my restaurant from the ground up in 2014, and am proud to
            say that it continues to be a Brooklyn gem today. What I love most
            about running a business is finding creative ways to solve obscure
            problems, and designing optimized systems to streamline workflows
            and increase productivity. I love empowering my staff with tools and
            techniques to succeed at their tasks, without having to micromanage
            them.
          </Typography>
          <br />
          <Typography variant="h6">
            Little Choc had to shut down for two months during the pandemic, and
            I used that time to explore some of my other talents and
            long-standing passions, like learning to code. Pursuing my interest
            further, I applied and was accepted to the Web Development
            Fellowship scholarship program at Fullstack Academy.
          </Typography>
          <br />
          <Typography variant="h6">
            Going through this immersive program has been a challenging,
            intellectually stimulating, and rewarding experience. I discovered
            that in order to succeed as an engineer, I have to flex all the
            muscles I already love to use—curiosity, creativity,
            problem-solving, and eagerness to learn. This made me fall even more
            in love with development, and I’m looking forward to tackling more
            challenges as a Software Engineer.
          </Typography>
        </motion.div>
      </Grid>
    </Dialog>
  );
}
