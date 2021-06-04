import React from "react";
import EmployeeCard from "./EmployeeCard";

function TeamsList({ data }) {
	const {name, members} = data;
	return (
		<>
			<h3>{name}</h3>
			<button>Add a New Team Member</button>
			{members.map(employee => (
				<EmployeeCard
					key={employee.id}
					id={employee.id}
					name={employee.name}
					position={employee.position}
					email={employee.email}
					phone={employee.phone}
				/>
			))}
		</>
	);
}

export default TeamsList;
