import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { employeeData, teams, position } from "./data/data";
import EmployeeCardList from "./components/EmployeeCardList";
import TeamsList from "./components/Team";

import Header from "./components/Header";

function App() {
	const [displayData, setDisplayData] = useState([]);
	const [teamDisplayData, setTeamDisplayData] = useState([]);
	const [empData, setEmpData] = useState(employeeData);
	const [posData, setPosData] = useState(position);
	const [teamData, setTeamData] = useState(teams);

	useEffect(() => {
		const empPositionMapData = empData.map(emp => {
			const posDetails = posData.find(pos => pos.id === emp.position);
			return { ...emp, position: posDetails.name };
		});
		setDisplayData(empPositionMapData);

		const teamDetails = teamData.map(team => {
			const memData = team.members.map(member => {
				const memDetails = empPositionMapData.find(emp => emp.id == member);
				return memDetails;
			});
			return { ...team, members: memData };
		});
		setTeamDisplayData(teamDetails);
	}, [empData, posData, teamData]);

	// CRUD fns
	const addEmployee = (name, phone, email, position) => {
		const empExists = empData.find(emp => emp.email === email);
		const posExists = posData.find(pos => pos.id === position);

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

		// TODO: Add NEW EMP to TEAM DATA
		setEmpData([
			...empData,
			{
				id: empData[empData.length - 1].id + 1,
				name,
				phone,
				email,
			},
		]);
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

		// Removing Employee from Teams Data
		const newTeams = teamData.map(team => {
			const memIndex = team.members.findIndex(mem => mem === id);
			if (memIndex !== -1) {
				return { ...team, members: team.members.filter((mem)=>mem !== id) };
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

	return (
		<>
			<div className="App">
				<Header />
				{teamDisplayData.map((team, index) => {
					return (
						<TeamsList key={team.id} data={team} addEmployee={addEmployee} removeEmployee={removeEmployee}/>
					);
				})}
				{/* <EmployeeCardList data={displayData} /> */}
			</div>
			;
		</>
	);
}

export default App;
