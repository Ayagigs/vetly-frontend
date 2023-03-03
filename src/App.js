/** @format */

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Verify from "./pages/wronginput/verify";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-up" element={<Signup />} />
			<Route path="/signin" element={<Signin />} />
			<Route path = "/verify" element={<Verify />} />
		</Routes>
	);
}

export default App;
