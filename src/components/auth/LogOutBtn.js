import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import dotenv from "dotenv";
dotenv.config();

function LogOutBtn() {
	const { getLoggedIn } = useContext(AuthContext);

	const history = useHistory();

	async function logOut() {
		// await axios.get("http://localhost:5000/auth/logout");
		await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/logout`);
		await getLoggedIn();
		history.push("/");
	}

	return <button onClick={logOut}>Log out</button>;
}

export default LogOutBtn;
