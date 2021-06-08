const employeeData = [
	{
		id: 1,
		image: "https://randomuser.me/api/portraits/women/90.jpg",
		name: "Lisa Simpson",
		email: "lissimp@email.com",
		position: 1,
		phone: "555-321-2345",
	},
	{
		id: 2,
		image: "https://randomuser.me/api/portraits/men/90.jpg",
		name: "Troy McGibbons",
		email: "troydog@email.com",
		position: 2,
		phone: "555-012-3456",
	},
	{
		id: 3,
		image: "https://randomuser.me/api/portraits/women/77.jpg",
		name: "Sandra Lopez",
		email: "salola@email.com",
		position: 3,
		phone: "555-456-7890",
	},
	{
		id: 4,
		image: "https://randomuser.me/api/portraits/men/35.jpg",
		name: "Tyler Durden",
		email: "projectmayhem@email.com",
		position: 4,
		phone: "555-654-9876",
	},
	{
		id: 5,
		image: "https://randomuser.me/api/portraits/women/51.jpg",
		name: "Kristen Stewart",
		email: "kikip@email.com",
		position: 5,
		phone: "555-987-9876",
	},
	{
		id: 6,
		image: "https://randomuser.me/api/portraits/men/48.jpg",
		name: "Ray Romano",
		email: "royro@email.com",
		position: 6,
		phone: "555-435-6748",
	},
	{
		id: 7,
		image: "https://randomuser.me/api/portraits/women/66.jpg",
		name: "Brenda Walsh",
		email: "90210@email.com",
		position: 6,
		phone: "555-666-7766",
	},
	{
		id: 8,
		image: "https://randomuser.me/api/portraits/men/25.jpg",
		name: "Booth Horvath",
		position: 7,
		email: "booboo@email.com",
		phone: "555-223-4334",
	},
	{
		id: 9,
		image: "https://randomuser.me/api/portraits/women/44.jpg",
		name: "Jessa Robinson",
		email: "jezebelish@email.com",
		position: 8,
		phone: "555-451-9974",
	},
	{
		id: 10,
		image: "https://randomuser.me/api/portraits/men/99.jpg",
		name: "Ira Glass",
		email: "tal@email.com",
		position: 9,
		phone: "555-111-3322",
	},
	{
		id: 11,
		image: "https://randomuser.me/api/portraits/women/87.jpg",
		name: "Andrea Russo",
		email: "russ@email.com",
		position: 10,
		phone: "555-110-1110",
	},
	{
		id: 12,
		image: "https://randomuser.me/api/portraits/men/45.jpg",
		name: "Charles Barkley",
		email: "charles@email.com",
		position: 11,
		phone: "555-001-0001",
	},
	{
		id: 13,
		image: "https://randomuser.me/api/portraits/women/39.jpg",
		name: "Diana Cheddar",
		position: 12,
		email: "didi@email.com",
		phone: "555-200-0002",
	},
	{
		id: 14,
		image: "https://randomuser.me/api/portraits/men/12.jpg",
		name: "Emerson Downing",
		position: 13,
		email: "eme@email.com",
		phone: "555-201-1002",
	},
	{
		id: 15,
		image: "https://randomuser.me/api/portraits/women/12.jpg",
		name: "Frances Robinson",
		position: 14,
		email: "fran@email.com",
		phone: "555-300-1003",
	},
	{
		id: 16,
		image: "https://randomuser.me/api/portraits/men/23.jpg",
		name: "Gabriel Rodriguez",
		position: 12,
		email: "gabbagabba@email.com",
		phone: "555-301-1020",
	},
	{
		id: 17,
		image: "https://randomuser.me/api/portraits/women/23.jpg",
		name: "Hannah Montana",
		position: 13,
		email: "bananarama@email.com",
		phone: "555-333-1020",
	},
	{
		id: 18,
		image: "https://randomuser.me/api/portraits/men/44.jpg",
		name: "Michael Scott",
		position: 14,
		email: "thatswhatshesaid@email.com",
		phone: "555-633-1020",
	},
	{
		id: 19,
		image: "https://randomuser.me/api/portraits/women/42.jpg",
		name: "Nancy Fey",
		position: 7,
		email: "nanana@email.com",
		phone: "555-777-1020",
	},
	{
		id: 20,
		image: "https://randomuser.me/api/portraits/men/3.jpg",
		name: "Oscar Schindler",
		position: 8,
		email: "oscar@email.com",
		phone: "555-777-7000",
	},
	{
		id: 21,
		image: "https://randomuser.me/api/portraits/women/3.jpg",
		name: "Petula Morrison",
		position: 9,
		email: "petulia@email.com",
		phone: "555-666-7000",
	},
	{
		id: 22,
		image: "https://randomuser.me/api/portraits/men/91.jpg",
		name: "Quinn Sanders",
		position: 10,
		email: "quinnylover@email.com",
		phone: "555-666-8888",
	},
	{
		id: 23,
		image: "https://randomuser.me/api/portraits/women/91.jpg",
		name: "Ursula Peterson",
		position: 11,
		email: "ur@email.com",
		phone: "555-123-8888",
	},
	{
		id: 24,
		image: "https://randomuser.me/api/portraits/men/75.jpg",
		name: "Victor Hugo",
		position: 5,
		email: "hugs@email.com",
		phone: "555-666-1234",
	},
	{
		id: 25,
		image: "https://randomuser.me/api/portraits/women/75.jpg",
		name: "Wanda Sikes",
		position: 6,
		email: "sike@email.com",
		phone: "555-678-4000",
	},
	{
		id: 26,
		image: "https://randomuser.me/api/portraits/men/32.jpg",
		name: "Xavier Burns",
		position: 15,
		email: "xman@email.com",
		phone: "555-321-3456",
	},
	{
		id: 27,
		image: "https://randomuser.me/api/portraits/women/54.jpg",
		name: "Yolanda Rivera",
		email: "yolo@email.com",
		position: 16,
		phone: "555-765-1234",
	},
	{
		id: 28,
		image: "https://randomuser.me/api/portraits/men/54.jpg",
		name: "Zach Morris",
		position: 14,
		email: "zakattack@email.com",
		phone: "555-800-8877",
	},
];

const position = [
	{
		id: 1,
		name: "CEO",
		reportsTo: 0,
		hasTeams: false,
	},
	{
		id: 2,
		name: "Head of staff/HR",
		reportsTo: 1,
		hasTeams: true,
	},
	{
		id: 3,
		name: "Head of engineering",
		reportsTo: 1,
		hasTeams: true,
	},
	{
		id: 4,
		name: "Head of design",
		reportsTo: 1,
		hasTeams: true,
	},
	{
		id: 5,
		name: "Lead Designer",
		reportsTo: 4,
		hasTeams: false,
	},
	{
		id: 6,
		name: "UI Designer",
		reportsTo: 4,
		hasTeams: false,
	},
	{
		id: 7,
		name: "Lead Engineer",
		reportsTo: 3,
		hasTeams: false,
	},
	{
		id: 8,
		name: "Backend Engineer",
		reportsTo: 3,
		hasTeams: false,
	},
	{
		id: 9,
		name: "Database Engineer",
		reportsTo: 3,
		hasTeams: false,
	},
	{
		id: 10,
		name: "Frontend Engineer",
		reportsTo: 3,
		hasTeams: false,
	},
	{
		id: 11,
		name: "React Engineer",
		reportsTo: 3,
		hasTeams: false,
	},
	{
		id: 12,
		name: "Lead HR",
		reportsTo: 2,
		hasTeams: false,
	},
	{
		id: 13,
		name: "Recuriter",
		reportsTo: 2,
		hasTeams: false,
	},
	{
		id: 14,
		name: "HR Intern",
		reportsTo: 2,
		hasTeams: false,
	},
	{
		id: 15,
		name: "UI Intern",
		reportsTo: 4,
		hasTeams: false,
	},
	{
		id: 16,
		name: "UI / UX Designer",
		reportsTo: 4,
		hasTeams: false,
	},

];

const teams = [
	{
		id: 1,
		name: "DesignTeam2",
		members: [24, 25, 26, 27],
		reportsTo: 4
	},
	{
		id: 2,
		name: "DesignTeam1",
		members: [5, 6, 7],
		reportsTo: 4
	},
	{
		id:3,
		name: "HRTeam1",
		members: [13, 14, 15],
		reportsTo: 2
	},
	{
		id:4,
		name: "HRTeam2",
		members: [16, 17, 18, 28],
		reportsTo: 2
	},
	{
		id:5,
		name: "DevTeam1",
		members: [8, 9, 10, 11, 12],
		reportsTo: 3
	},
	{
		id: 6,
		name: "DevTeam2",
		members: [19, 20, 21, 22, 23],
		reportsTo: 3
	}
];

export { employeeData, teams, position };