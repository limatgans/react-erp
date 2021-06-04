import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList({ data }) {
	return (
		<>
			{data.map(employee => (
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

export default EmployeeCardList;
