import React, { useState, useRef } from "react";
import { Dialog, Typography, Grid, Popper } from "@material-ui/core";
import { motion } from "framer-motion";

const stackIconVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	hidden2: {
		opacity: 0,
		x: "-100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
	},
	transition: {
		type: "spring",
		delay: 1,
	},
};

const titleVariants = {
	hidden1: {
		opacity: 0,
		y: "100vh",
	},
	hidden2: {
		opacity: 0,
		y: "-100vh",
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			delay: 0.3,
			striffness: 50,
		},
	},
};

export default function Stack({ openStack, setOpenStack }) {
	const [selectedIcon, setSelectedIcon] = useState("");
	const [openPopper, setOpenPopper] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const constraintsRef = useRef(null);
	const constraintsRef2 = useRef(null);

	const icons = [
    { name: 'Python 3', img: 'python_icon.png' },
    { name: 'Node JS', img: 'node_icon.png' },
    { name: 'React JS', img: 'react_icon.png' },
    { name: 'Redux', img: 'redux_icon.png' },
    { name: 'Git / GitHub', img: 'git_icon.png' },
    { name: 'Express JS', img: 'expressjs_icon.png' },
    { name: 'Sequelize', img: 'sequelize_icon.png' },
    { name: 'PostgreSQL', img: 'postgresql_icon.png' },
    { name: 'Firebase', img: 'firebase_icon.png' },
    { name: 'CSS', img: 'css_icon.png' },
    { name: 'HTML', img: 'html_icon.png' },
    { name: 'Material UI', img: 'material_ui_icon.png' },
  ];

	const iconsTwo = [
    { name: 'Scala', img: 'scala_icon.png' },
    { name: 'TensorFlow JS', img: 'tensorflow_icon.png' },
    { name: 'Three JS', img: 'three_icon.png' },
    { name: 'Framer Motion', img: 'framer_icon.png' },
    { name: 'Heroku', img: 'heroku_icon.png' },
    { name: 'Travis', img: 'travis_icon.png' },
  ];

	return (
    <Dialog
      open={openStack}
      onBackdropClick={() => setOpenStack(false)}
      onEscapeKeyDown={() => setOpenStack(false)}
      maxWidth="lg"
    >
      <motion.div variants={titleVariants} initial="hidden1" animate="visible">
        <Typography variant="h2" align="center">
          What I know
        </Typography>
      </motion.div>
      <br />
      <Popper open={openPopper} anchorEl={anchorEl} style={{ zIndex: 1400 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className="popper"
        >
          <Typography>{selectedIcon}</Typography>
        </motion.div>
      </Popper>
      <Grid container spacing={3} justify="center" ref={constraintsRef}>
        {icons.map((icon) => {
          return (
            <Grid item key={icon.name}>
              <motion.div
                variants={stackIconVariants}
                className="iconBg"
                drag
                dragConstraints={constraintsRef}
                initial="hidden"
                animate="visible"
                transition="transition"
                onMouseEnter={(e) => {
                  setAnchorEl(e.currentTarget);
                  setOpenPopper(true);
                  setSelectedIcon(icon.name);
                }}
                onMouseLeave={() => {
                  setSelectedIcon('');
                  setOpenPopper(false);
                }}
                whileHover={{
                  sacle: 1.2,
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
      <br />
      <br />
      <motion.div variants={titleVariants} initial="hidden2" animate="visible">
        <Typography variant="h2" align="center">
          What I'm familiar with
        </Typography>
      </motion.div>
      <br />

      <Grid container spacing={3} justify="center" ref={constraintsRef2}>
        {iconsTwo.map((icon) => {
          return (
            <Grid item key={icon.name}>
              <motion.div
                variants={stackIconVariants}
                className="iconBg"
                drag
                dragConstraints={constraintsRef2}
                initial="hidden2"
                animate="visible"
                onMouseEnter={(e) => {
                  setAnchorEl(e.currentTarget);
                  setOpenPopper(true);
                  setSelectedIcon(icon.name);
                }}
                onMouseLeave={() => {
                  setSelectedIcon('');
                  setOpenPopper(false);
                }}
                whileHover={{ scale: 1.2 }}
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
    </Dialog>
  );
}
