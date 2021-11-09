import ContactFooter from './contact/ContactFooter';
import ContactHeader from './contact/ContactHeader';

// This is routeable since it ends with .page.js
export default function Contact() {
	return (
		<div>
			<ContactHeader />
			Some body text
			<ContactFooter />
		</div>
	);
}
