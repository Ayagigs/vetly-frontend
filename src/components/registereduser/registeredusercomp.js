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

const useStyles = createStyles((theme) => ({
	rowSelected: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
				: theme.colors[theme.primaryColor][0],
	},
}));


export function TableSelection({ data }) {
	const { classes, cx } = useStyles();
	const [selection, setSelection] = useState(["1"]);
	const toggleRow = (id: string) =>
		setSelection((current) =>
			current.includes(id)
				? current.filter((item) => item !== id)
				: [...current, id],
		);
	const toggleAll = () =>
		setSelection((current) =>
			current.length === data.length ? [] : data.map((item) => item.id),
		);

	const rows = data.map((item) => {
		const selected = selection.includes(item.id);
		return (
			<tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
				<td>
					<Checkbox
						checked={selection.includes(item.id)}
						onChange={() => toggleRow(item.id)}
						transitionDuration={0}
					/>
				</td>
				<td>
					<Group spacing="sm" style={{border: "none", padding: "10px"}}>
						<Avatar size={50} src={item.avatar} radius={26} />
						<Text style={{ fontSize: "14px" }} weight={500}>
							{item.name}
						</Text>
					</Group>
				</td>

				<td style={{ fontSize: "14px", color: "#5D5E5F" }}>{item.email}</td>
				<td style={{ fontSize: "14px", color: "#5D5E5F" }}>{item.date}</td>
				<td style={{ fontSize: "14px", color: "#22A57E" }}>{item.status}</td>
			</tr>
		);
	});

	return (
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
						<th style={{ fontSize: "12px" }}>Date</th>
						<th style={{ fontSize: "12px" }}>Status</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	);
}
