import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://github.com/himrd95/me_Himanshu/blob/main/src/assets/profile_pic_without_background.png?raw=true'
			: 'https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					A Full-Stack Developer, Ready to build, code, and collaborate,
with a positive mindset, looking forward to
enhancing my knowledge in this field
					<span style={{ color: `#00a0a0` }}>
						{' '}
						  {/* as a Full Stack Web Developer */}
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
