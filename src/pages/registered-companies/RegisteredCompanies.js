/** @format */
import CompCard from "../../components/registeredcomptable/registercompcmp";
import './registeredcomp.css'
import data from "../../components/Registeredcompdata";
import { RegisteredCompTable } from "../../components/registeredcomptable/registerdcomptable";
import InputCard from "../../components/registeredcomptable/popupcrd";
import { useState } from "react";

const RegisteredCompanies = () => {

	const compCard = data.map((item) => {
			return <CompCard key={item.id} {...item} />
	})

	const [modal, setModal] = useState();
	function toggle(id) {
		setModal((prevModal) => {
			return prevModal.map((modal) => {
				return modal.id === id
					? { ...modal, displayed: !modal.displayed }
					: modal;
			})
		})
	}

	// const [isactive, setIsactive] = useState(true)
	// setIsactive(prevactive => !prevactive)
	return (
		<div className="registeredcompelmnts">
			<div className="registeredcomp">
				<div className="registeredheader">
					<h1>Registered Companies</h1>
				</div>
				<div className="carditems">{compCard}</div>
				<input type="text" placeholder="Search by name" className="compinput" />
				<div className="registeredcmpnytable">
					<RegisteredCompTable
						key={modal.id}
						displayed = {modal.displayed}
						handleToggle = {() => toggle(modal.id)}
						data={[
							{
								id: 0,
								name: "Fatima Aminu",
								avatar:
									"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
								email: "Teemah@vetly.com",
								substype: "Yearly",
								duration: "20th Feb, 2022 - 20th Feb, 2023",
							},
							{
								id: 1,
								name: "Fatima Aminu",
								avatar:
									"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
								email: "Teemah@vetly.com",
								substype: "Yearly",
								duration: "20th Feb, 2022 - 20th Feb, 2023",
							},
							{
								id: 2,
								name: "Fatima Aminu",
								avatar:
									"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
								email: "Teemah@vetly.com",
								substype: "Yearly",
								duration: "20th Feb, 2022 - 20th Feb, 2023",
							},
							{
								id: 3,
								name: "Fatima Aminu",
								avatar:
									"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
								email: "Teemah@vetly.com",
								substype: "Yearly",
								duration: "20th Feb, 2022 - 20th Feb, 2023",
							},
						]}
					/>
				</div>
			</div>

			<InputCard />
		</div>
	);
};

export default RegisteredCompanies;
