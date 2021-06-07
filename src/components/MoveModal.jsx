import React, { useState } from "react";

export default function MoveModal({
	visible,
	empId,
	getTeamsForEmp,
	moveEmployee,
	closeModal,
}) {
	const teamsAvailableStatus = getTeamsForEmp(empId);

	if (!teamsAvailableStatus.status) {
		alert(teamsAvailableStatus.msg);
		closeModal();
		return;
	}

	const teamsAvailable = teamsAvailableStatus.data;

	const [teamId, setTeam] = useState(teamsAvailable[0]?.id);

	const handleMove = e => {
		const status = moveEmployee({ teamId, empId });
		alert(status.msg);
		// closeModal();
	};

	const handleTeamChange = e => {
		setTeam(e.target.value);
	};

	return (
		<>
			{visible && (
				<div className="modal">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Move Team Member</h4>
						</div>
						<div className="modal-body">
							<div>
								New team :{" "}
								<select
									onChange={handleTeamChange}
									placeholder="Select a new team">
									{teamsAvailable.map(pos => {
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
							<button onClick={handleMove}>Move</button>
							<button onClick={closeModal}>Close</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
