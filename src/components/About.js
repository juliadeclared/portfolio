import React, { useEffect, useState } from "react";
import { Dialog, Typography } from '@material-ui/core'

export default function About({ show }) {
	const [open, setOpen] = useState(show);

	useEffect(() => {
		setOpen(show);
	}, [show]);

	const handleClickAway = () => {
		setOpen(false);
	};

	return (
		<Dialog open={open} onBackdropClick={handleClickAway}>
			<img src={process.env.PUBLIC_URL + "/profileImage.png"} alt="Profile" />
			<Typography variant="h2">About Me</Typography>
			<Typography variant="h6">
				I am the founder of the first fully vegan and gluten-free creperie in
				New York — Little Choc Apothecary. I am also a newly trained Software
				Engineer! I built my restaurant from the ground up in 2014, at 24 years
				of age, and am proud to say that it continues to be a Brooklyn gem
				today. What I love most about my job is finding creative ways to solve
				obscure problems, and designing optimized systems to streamline
				workflows and increase productivity. I love empowering my staff with
				tools and techniques to succeed at their tasks, without having to
				micromanage them. Little Choc had to shut down for two months during the
				pandemic, and I found myself with a lot of free time to explore other
				talents and long-standing passions, like learning to code. Pursuing my
				interest further, I applied and was accepted to the Web Development
				Fellowship scholarship program at Fullstack Academy. Going through this
				immersive program has been a challenging, intellectually stimulating,
				and rewarding experience. It made me fall even more in love with
				development, and I’m looking forward to tackling more challenges as a
				Software Engineer.
			</Typography>
		</Dialog>
	);
}
