import React, { useState } from "react";
// import AddMemberModal from "./AddMemberModal";
import EmployeeCard from "./EmployeeCard";

function TeamsList({ data, addEmployee, removeEmployee }) {
	const { name, members } = data;
	const [showAddMemberModal, toggleAddMemberModal] = useState(false);

	const closeAddNewMemModal = e => {
		toggleAddMemberModal(false);
	};

	return (
		<>
			<h3>{name}</h3>
			<button onClick={e => toggleAddMemberModal(true)}>
				Add a New Team Member
			</button>
			{members.map(employee => (
				<EmployeeCard
					key={employee.id}
					id={employee.id}
					name={employee.name}
					position={employee.position}
					email={employee.email}
					phone={employee.phone}
					removeEmployee={removeEmployee}
				/>
			))}
			{/* <AddMemberModal
				visible={showAddMemberModal}
				closeModal={closeAddNewMemModal}
				addEmployee={addEmployee}
			/> */}
		</>
	);
}

export default TeamsList;
