import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
	const [dogs, setDogs] = useState([]);

	useEffect(() => {
		fetch('/api/dogs')
			.then((resp) => resp.json())
			.then(setDogs);
	}, []);

	return (
		<div>
			<div>Some dogs:</div>
			<ul>
				{dogs.map((dog) => (
					<li key={dog.id}>{dog.name}</li>
				))}
			</ul>
			<div>
				<Link href="/about">
					<a>About page</a>
				</Link>
			</div>
			<div>
				<Link href="/contact">
					<a>Contact page</a>
				</Link>
			</div>
		</div>
	);
}
