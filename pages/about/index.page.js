import AboutFooter from './AboutFooter';
import AboutHeader from './AboutHeader';

// This is routeable since it ends with .page.js
export default function About() {
	return (
		<div>
			<AboutHeader />
			Some body text
			<AboutFooter />
		</div>
	);
}
