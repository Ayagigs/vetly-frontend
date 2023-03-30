/** @format */

import { useState } from "react";

import {
	createStyles,
	Table,
	Checkbox,
	ScrollArea,
	Group,
	Avatar,
	Text,
	rem,
} from "@mantine/core";
import RegModal from "../registereduser/modal";

const useStyles = createStyles((theme) => ({
	rowSelected: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
				: theme.colors[theme.primaryColor][0],
	},
}));

export function RegisteredCompTable({ data }) {
	const [modal, setModal] = useState(false);
	const [clickedUser, setClickedUser] = useState({});
	const { classes, cx } = useStyles();
	const [selection, setSelection] = useState(["1"]);
	const toggleRow = (id: string) =>
		setSelection((current) =>
			current.includes(id)
				? current.filter((item) => item !== id)
				: [...current, id],
		);

const handleSetUser = (item) => {
	setModal(true)
	setClickedUser(item)
}

  const toggleAll = (item) => {
		setClickedUser(item);
		setSelection((current) =>
			current.length === data.length ? [] : data.map((item) => item.id),
		);
	};

	const rows = data.map((item) => {
		const selected = selection.includes(item.id);
		const styles = {
			// display: item.displayed ? "none" : "block",
			cursor: "pointer",
		};

		return (
			<>
			
				<tr
					key={item.id}
					className={cx({ [classes.rowSelected]: selected })}
					style={{ styles }}
					onClick={() => handleSetUser(item)}>
					<td>
						<Checkbox
							checked={selection.includes(item.id)}
							onChange={() => toggleRow(item.id)}
							transitionDuration={0}
						/>
					</td>
					<td>
						<Group spacing="sm" style={{ border: "none", padding: "10px" }}>
							<Avatar size={50} src={item.avatar} radius={26} />
							<Text style={{ fontSize: "14px" }} weight={500}>
								{item.name}
							</Text>
						</Group>
					</td>

					<td style={{ fontSize: "14px", color: "#5D5E5F", cursor: "pointer" }}>
						{item.email}
					</td>
					<td style={{ fontSize: "14px", color: "#5D5E5F", cursor: "pointer" }}>
						{item.substype}
					</td>
					<td
						style={{
							fontSize: "14px",
							color: "#5D5E5F",
							paddingLeft: "60px",
							cursor: "pointer",
						}}>
						{item.duration}
					</td>
				</tr>
			</>
		);
	});

	return (
		<>
			{modal && <RegModal setModal={setModal} user={clickedUser} />}

			<ScrollArea>
				<Table miw={800} verticalSpacing="sm">

					<thead>
						<tr>
							<th style={{ width: rem(40) }}>
								<Checkbox
									onChange={toggleAll}
									checked={selection.length === data.length}
									indeterminate={
										selection.length > 0 && selection.length !== data.length
									}
									transitionDuration={0}
								/>
							</th>

							<th style={{ fontSize: "12px" }}>Name</th>
							<th style={{ fontSize: "12px" }}>Email</th>
							<th style={{ fontSize: "12px" }}>Subs Type</th>
							<th style={{ fontSize: "12px", paddingLeft: "60px" }}>Duration</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</ScrollArea>
		</>
	);
}
