import React, { useState } from "react";

function AddMemberModal(props) {
	const { visible, closeModal, addEmployee, teamId } = props;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [position, setPosition] = useState("");

	const handleNameChange = e => {
		setName(e.target.value);
	};

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handlePhoneChange = e => {
		setPhone(e.target.value);
	};

	const handleSave = e => {
		if (!name || !email || !phone) {
			alert("Please fill all details");
			return;
		}
		const status = addEmployee({name, email, phone, teamId});
		alert(status.msg);
	};

	return (
		<>
			{visible && (
				<div className="modal">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Add Team Member</h4>
						</div>
						<div className="modal-body">
							<div>
								Name :{" "}
								<input
									type="text"
									value={name}
									onChange={handleNameChange}
									placeholder="Enter Name here"
								/>
							</div>
							<div>
								Email :{" "}
								<input
									type="text"
									value={email}
									onChange={handleEmailChange}
									placeholder="Enter Email here"
								/>
							</div>
							<div>
								Phone :{" "}
								<input
									type="text"
									value={phone}
									onChange={handlePhoneChange}
									placeholder="Enter Phone here"
								/>
							</div>
						</div>

						<div className="modal-footer">
							<button onClick={handleSave}>Save</button>
							<button onClick={closeModal}>Close</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default AddMemberModal;
