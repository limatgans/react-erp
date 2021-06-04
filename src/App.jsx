import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {employeeData} from "./data/data"; 
import EmployeeCardList from "./components/EmployeeCardList";

function App() {
	return <div className="App">
		<EmployeeCardList data={employeeData}/>
	</div>;
}

export default App;
