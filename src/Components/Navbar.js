import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './Data';
function Navbar() {
	const [ showLinks, setShowLinks ] = useState(false);
	const linksRef = useRef(null); // the unordered list
	const linksContainerRef = useRef(null); // for the div

	useEffect(
		() => {
			// chek for the height and everytime we add new content in links = linksRef, the linksRef updates the
			const linksHeight = linksRef.current.getBoundingClientRect().height; // we get the height from getBoundingClientRect if we console log the linkHeight
			console.log(linksHeight);

			if (showLinks) {
				linksContainerRef.current.style.height = `${linksHeight}px`; // basic javascript inline css styling and here we update the height
			} else {
				linksContainerRef.current.style.height = '0px';
			}
		},
		[ showLinks ]
	);

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<h3>NavBar</h3>
					<button
						className="nav-toggle"
						onClick={() => setShowLinks(!showLinks) //show or not show the links
						}
					>
						<FaBars />
					</button>
				</div>
				{/* showLinks && ( // we add this type of consitional rendering here to have a smooth transition during onCLick which we have it in our app.css display the links */}
					<div className='links-container' ref={linksContainerRef}>
					<ul className='links' ref={linksRef}>
						{links.length &&
							links.map((item) => {
								// instead of hard coding the navbar links we use map method to get the links from Data component
								const { id, url, text } = item;
								return (
									<li key={id}>
										<a href={url}>{text} </a>
									</li>
								);
							})}
					</ul>
				</div>

				<ul className="social-icons">
					{social.length &&
						social.map((getIcons) => {
							// instead of hard coding the navbar icons we use map method to get the icons from Data component

							const { id, url, icon } = getIcons;
							return (
								<li key={id}>
									<a href={url}>{icon}</a>
								</li>
							);
						})}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
