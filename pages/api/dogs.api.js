export default function handler(req, res) {
	return res.json([
		{
			id: 1,
			name: 'Fido',
			breed: 'Labrador',
			age: 2,
		},
		{
			id: 2,
			name: 'Buddy',
			breed: 'Labrador',
			age: 3,
		},
	]);
}
