import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { employeeData, teams, position } from "./data/data";
import EmployeeCardList from "./components/EmployeeCardList";
import EmployeeCard from "./components/EmployeeCard";
import CreateTeamModal from "./components/CreateTeamModal";

import TeamsList from "./components/Team";

import Header from "./components/Header";

function App() {
	const [displayData, setDisplayData] = useState([]);
	const [teamDisplayData, setTeamDisplayData] = useState([]);
	const [empData, setEmpData] = useState(employeeData);
	const [posData, setPosData] = useState(position);
	const [teamData, setTeamData] = useState(teams);
	const [showNewTeamModal, toggleNewTeamModal] = useState(false);

	useEffect(() => {
		// Mapping Employee with position
		const empPositionMapData = empData.map(emp => {
			const posDetails = posData.find(pos => pos.id === emp.position);
			return { ...emp, position: posDetails.name, positionId: emp.position };
		});

		// Mapping Teams with details of members
		const teamDetails = teamData.map(team => {
			const memData = team.members.map(member => {
				const memDetails = empPositionMapData.find(emp => emp.id == member);
				return memDetails;
			});
			return { ...team, members: memData };
		});

		const mgmtPositions = [1, 2, 3, 4];

		const mgmtPositionMapData = empPositionMapData.filter(emp => {
			return mgmtPositions.includes(emp.positionId);
		});

		const mgmtData = mgmtPositionMapData.map(emp => {
			const teams = teamDetails.filter(t => t.reportsTo === emp.id);
			return { ...emp, teams };
		});

		setDisplayData(mgmtData);
		setTeamDisplayData(teamDetails);
	}, [empData, posData, teamData]);

	// CRUD fns
	const addEmployee = ({ name, phone, email, position, teamId }) => {
		const empExists = empData.find(emp => emp.email === email);
		const posExists = posData.find(pos => pos.id === Number(position));
		const teamExists = teamData.find(team => team.id === teamId);

		if (empExists) {
			return {
				status: false,
				msg: "Employee Email Already Exists",
			};
		}

		if (!posExists) {
			return {
				status: false,
				msg: "Invalid Positon",
			};
		}

		if (!teamExists) {
			return {
				status: false,
				msg: "Invalid Team Id",
			};
		}

		const newEmpId = empData[empData.length - 1].id + 1;

		// Assigning New Emp to a team
		const newTeam = teamData.map(t => {
			if (t.id === teamId) {
				return {
					...t,
					members: [...t.members, newEmpId],
				};
			}
			return t;
		});
		setEmpData([
			...empData,
			{
				id: newEmpId,
				name,
				phone,
				email,
				position,
			},
		]);
		setTeamData(newTeam);
		return {
			status: true,
			msg: "Employee Added Successfully",
		};
	};

	const removeEmployee = id => {
		const empIndex = empData.findIndex(emp => emp.id === id);
		if (empIndex === -1) {
			return {
				status: false,
				msg: "Employee does not Exists",
			};
		}

		if (id === 1) {
			return {
				status: false,
				msg: "Employee cannot be removed as he/she is CEO",
			};
		}

		const teamsReporting = teamData.filter(t => t.reportsTo === id);

		if (teamsReporting.length !== 0) {
			return {
				status: false,
				msg:
					"Employee cannot be removed as he/she has teams under him. Please reassign the team",
			};
		}

		// Removing Employee from Teams Data
		const newTeams = teamData.map(team => {
			const memIndex = team.members.findIndex(mem => mem === id);
			if (memIndex !== -1) {
				return { ...team, members: team.members.filter(mem => mem !== id) };
			}
			return team;
		});

		setTeamData(newTeams);
		setEmpData(empData.filter((emp, idx) => idx !== empIndex));

		return {
			status: true,
			msg: "Employee removed Successfully",
		};
	};

	const editEmployee = ({ id, name, email, phone, position }) => {
		const empIndex = empData.findIndex(emp => emp.id === id);
		const empWithSameDetails = empData.find(
			emp => emp.id !== id && emp.email === email && emp.phone === phone,
		);

		if (empIndex === -1) {
			return {
				status: false,
				msg: "Employee does not Exists",
			};
		}

		if (empWithSameDetails) {
			return {
				status: false,
				msg: "An employee already exists with the new email or phone",
			};
		}

		const newEmpList = empData.map((emp, idx) => {
			if (emp.id === id) {
				return {
					...emp,
					name: name ? name : emp.name,
					email: email ? email : emp.email,
					phone: phone ? phone : emp.phone,
					position: position ? position : emp.position,
				};
			}
			return emp;
		});

		setEmpData(newEmpList);

		return {
			status: true,
			msg: "Employee Details has been updated Successfully",
		};
	};

	const promoteEmployee = id => {
		const emp = empData.find(emp => emp.id === id);
		const posDetails = posData.find(pos => pos.id === emp.position);

		if (!emp || !posDetails) {
			return {
				status: false,
				msg: "Employee Details / Position Details not found",
			};
		}

		// If Employee is CEO / Top of position
		if (posDetails.reportsTo === 0) {
			return {
				status: false,
				msg: `${emp.name} cannot be promoted as he/she is already at the top of position table`,
			};
		}

		// Updating Position
		const updated = editEmployee({ id, position: posDetails.reportsTo });

		if (updated.status) {
			// Removing Employee from Teams Data
			const newTeams = teamData.map(team => {
				const memIndex = team.members.findIndex(mem => mem === id);
				if (memIndex !== -1) {
					return { ...team, members: team.members.filter(mem => mem !== id) };
				}
				return team;
			});

			setTeamData(newTeams);
			return {
				status: true,
				msg: "Employee has been promoted!",
			};
		}

		return updated;
	};

	const getPositionsForTeam = teamId => {
		const team = teamData.find(tm => tm.id === teamId);

		if (!team) {
			return {
				status: false,
				msg: "Couldn't fetch Team",
			};
		}

		const positions = posData
			.filter(pos => pos.reportsTo === team.reportsTo)
			.map(pos => {
				return { name: pos.name, id: pos.id };
			});

		return {
			status: true,
			msg: "Positions fetched",
			data: positions,
		};
	};

	const getTeamsForEmp = empId => {
		const emp = empData.find(emp => emp.id === empId);
		if (!emp) {
			return {
				status: false,
				msg: "Employee Details not found",
			};
		}

		const pos = posData.find(p => p.id === emp.position);
		if (!pos) {
			return {
				status: false,
				msg: "Invalid Positon",
			};
		}

		// Team reports to an employee
		// Employee reports to a position

		// const teamsAvailable = teamData.filter(
		// 	team => team.reportsTo === pos.reportsTo && !team.members.includes(empId),
		// );

		const teamsAvailable = teamData.filter(team => {
			// Find which employee the team reports to
			const reportingEmployee = empData.find(emp => emp.id === team.reportsTo);
			if (!reportingEmployee) return;
			// Find Which position that employee is
			// Compare pos.reports with that reporting position
			return (
				reportingEmployee.position === pos.reportsTo &&
				!team.members.includes(empId)
			);
		});

		return {
			status: true,
			msg: "Teams fetched",
			data: teamsAvailable,
		};
	};

	const moveEmployee = ({ teamId, empId }) => {
		const emp = empData.find(emp => emp.id === empId);
		if (!emp) {
			return {
				status: false,
				msg: "Employee Details not found",
			};
		}

		const previousTeam = teamData.find(team => team.members.includes(empId));
		const currentTeam = teamData.find(team => team.id === teamId);

		const newTeam = teamData.map(team => {
			if (team.id === currentTeam.id) {
				return {
					...team,
					members: [...team.members, empId],
				};
			}
			if (team.id === previousTeam.id) {
				return {
					...team,
					members: team.members.filter(mem => mem !== empId),
				};
			}
			return team;
		});

		setTeamData(newTeam);
		return {
			status: true,
			msg: "Employee moved to new team successfully!",
		};
	};

	const createTeams = ({ empId, teamName }) => {
		const teams = teamData.filter(t => t.name === teamName);

		if (teams.length !== 0) {
			return {
				status: false,
				msg: "Two teams cannot have the same name.",
			};
		}

		const emp = empData.find(emp => emp.id === empId);
		if (!emp) {
			return {
				status: false,
				msg: "Employee Details not found",
			};
		}

		const newTeams = [
			...teamData,
			{
				id: teamData[teamData.length - 1].id + 1,
				name: teamName,
				members: [],
				reportsTo: empId,
			},
		];

		setTeamData(newTeams);
		return {
			status: true,
			msg: "Team created successfully!",
		};
	};

	return (
		<>
			<div className="App">
				<Header />
				{displayData.map((employee, index) => {
					return (
						<>
							<h3>{employee.position}</h3>
							<EmployeeCard
								key={employee.id}
								id={employee.id}
								name={employee.name}
								position={employee.position}
								email={employee.email}
								phone={employee.phone}
								removeEmployee={removeEmployee}
								editEmployee={editEmployee}
								promoteEmployee={promoteEmployee}
								getTeamsForEmp={getTeamsForEmp}
								moveEmployee={moveEmployee}
							/>
							<h3>Teams Under {employee.name}</h3>
							<button
								onClick={e => {
									toggleNewTeamModal(true);
								}}>
								Create a new Team
							</button>
							<CreateTeamModal
								visible={showNewTeamModal}
								empId={employee.id}
								createTeams={createTeams}
								closeModal={e => {
									toggleNewTeamModal(false);
								}}
							/>
							{employee.teams.map(team => {
								return (
									<TeamsList
										key={team.id}
										data={team}
										addEmployee={addEmployee}
										removeEmployee={removeEmployee}
										editEmployee={editEmployee}
										promoteEmployee={promoteEmployee}
										getPositionsForTeam={getPositionsForTeam}
										getTeamsForEmp={getTeamsForEmp}
										moveEmployee={moveEmployee}
									/>
								);
							})}
						</>
					);
				})}
				{/* <EmployeeCardList data={displayData} /> */}
			</div>
		</>
	);
}

export default App;
