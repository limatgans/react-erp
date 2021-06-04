import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { employeeData, teams, position } from "./data/data";
import EmployeeCardList from "./components/EmployeeCardList";
import TeamsList from "./components/Team";

import Header from "./components/Header";

function App() {
	const [displayData, setDisplayData] = useState([]);
	const [teamData, setTeamData] = useState([]);

	useEffect(() => {
		const empPositionMapData = employeeData.map(emp => {
			const posDetails = position.find(pos => pos.id === emp.position);
			return {...emp, position: posDetails.name}
		});
		setDisplayData(empPositionMapData);

		const teamDetails = teams.map((team) => {
			const memData = team.members.map((member) => {
				const memDetails = empPositionMapData.find((emp) => emp.id == member);
				return memDetails;
			});
			return {...team, members: memData}
		});
		setTeamData(teamDetails);

	}, []);
	return (
		<>
			<div className="App">
				<Header />
				{teamData.map((team, index)=> {
					return <TeamsList key={team.id} data={team} />
				})}
				{/* <EmployeeCardList data={displayData} /> */}
			</div>
			;
		</>
	);
}

export default App;
