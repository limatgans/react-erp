import React, { useState } from "react";
import "./EmployeeCard.css";

function EmployeeCard({
	id,
	name,
	email,
	phone,
	position,
	removeEmployee,
	handleSave = () => {},
}) {
	const [isEdit, toggleEdit] = useState(false);

	const [empName, setEmpName] = useState(name);
	const [empEmail, setEmpEmail] = useState(email);
	const [empPhone, setEmpPhone] = useState(phone);
	const [empPosition, setEmpPosition] = useState(position);

	const handleNameChange = e => {
		setEmpName(e.target.value);
	};

	const handleEmailChange = e => {
		setEmpEmail(e.target.value);
	};

	const handlePhoneChange = e => {
		setEmpPhone(e.target.value);
	};

	const handlePositionChange = e => {
		setEmpPosition(e.target.value);
	};

	const handleEdit = () => {
		toggleEdit(true);
	};

	const handleEmpSave = () => {
		handleSave({
			empName,
			empEmail,
			empPhone,
			// empPosition
		});
		toggleEdit(false);
	}

	const handleRemove=(e)=> {
		const removedStatus = removeEmployee(id);
		alert(removedStatus.msg);
	}

	return (
		<div className="employeeCard">
			{/* <p>{id}</p> */}
			{isEdit ? (
				<>
					<input className="width-1em employeeItems" type="text" value={empName} onChange={e => handleNameChange(e)} />
					<p className="width-1em employeeItems">{empPosition}</p>
					<input className="width-1em employeeItems" type="text" value={empEmail} onChange={e => handleEmailChange(e)}/>
					<input className="width-1em employeeItems" type="text" value={empPhone} onChange={e => handlePhoneChange(e)}/>
					<button className="employeeItems" onClick={handleEmpSave}>SAVE</button>
				</>
			) : (
				<>
					<p className="width-1em employeeItems">{empName}</p>
					<p className="width-1em employeeItems" >{empPosition}</p>
					<p className="width-1em employeeItems">{empEmail}</p>
					<p className="width-1em employeeItems">{empPhone}</p>
					<button className="employeeItems" onClick={handleEdit}>EDIT</button>
				</>
			)}
			<button className="employeeItems">PROMOTE</button>
			<button className="employeeItems" onClick={handleRemove}>REMOVE</button>
			<button className="employeeItems">MOVE</button>
		</div>
	);
}

export default EmployeeCard;
