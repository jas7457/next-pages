// api routes are effected too, I have a rule that says to use .api.js files for api routes
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
