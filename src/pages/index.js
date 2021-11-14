import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "./layout";

// markup
const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>Welcome to my blog</p>
			<StaticImage
				src="../images/dog and cat friend.png"
				alt="dog and cat friend"
			/>
		</Layout>
	);
};

export default IndexPage;
