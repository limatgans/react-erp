import React, { useState } from "react";

export default function CreateTeamModal({
	visible,
	empId,
	createTeams,
	closeModal,
}) {
	const [teamName, setTeamName] = useState("");

	const handleCreate = e => {
		if (!teamName) {
			return alert("Team Name is empty")
		}
		const status = createTeams({ teamName, empId });
		alert(status.msg);
		// closeModal();
	};

	const handleNameChange = e => {
		setTeamName(e.target.value);
	};

	return (
		<>
			{visible && ( 
				<div className="modal">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Create New Team</h4>
						</div>
						<div className="modal-body">
						<div>
								Team Name :{" "}
								<input
									type="text"
									value={teamName}
									onChange={handleNameChange}
									placeholder="Enter new team name here"
								/>
							</div>
						</div>

						<div className="modal-footer">
							<button onClick={handleCreate}>Create</button>
							<button onClick={closeModal}>Close</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
