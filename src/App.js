/** @format */

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-up" element={<Signup />} />
			<Route path="/signin" element={<Signin />} />
		</Routes>
	);
}

export default App;
