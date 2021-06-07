import React, { useState } from "react";

function AddMemberModal(props) {
	const {
		visible,
		closeModal,
		addEmployee,
		teamId,
		getPositionsForTeam,
	} = props;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const tempPost = getPositionsForTeam(teamId);
	if (!tempPost.status) {
		return alert(tempPost.msg);
	}
	const [positionDropDown, setPosDropDwn] = useState(tempPost.data);
	const [position, setPosition] = useState(positionDropDown[0]?.id);

	const handleNameChange = e => {
		setName(e.target.value);
	};

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handlePhoneChange = e => {
		setPhone(e.target.value);
	};

	const handlePosChange = e => {
		setPosition(e.target.value);
	};

	const handleSave = e => {
		if (!name || !email || !phone) {
			alert("Please fill all details");
			return;
		}
		const status = addEmployee({ name, email, phone, teamId, position });

		alert(status.msg);

		if (status.status) {
			setName("");
			setPhone("");
			setPosition(positionDropDown[0]?.id);
			setEmail("");
			closeModal();
		}
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
							<div>
								Position :{" "}
								<select
									onChange={handlePosChange}
									placeholder="Select a position">
									{positionDropDown.map(pos => {
										return (
											<option key={pos.id} value={pos.id}>
												{pos.name}
											</option>
										);
									})}
								</select>
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
