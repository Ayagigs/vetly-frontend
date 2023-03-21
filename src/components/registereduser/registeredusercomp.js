/** @format */

import * as React from "react";
import { storiesOf } from "@storybook/react";

import { createTheme as createMaterialTheme } from "@mui/material/styles";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import MaterialCheckbox from "@mui/material/Checkbox";

import {
	Table,
	Header,
	HeaderRow,
	Body,
	Row,
	HeaderCell,
	Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";

import {
	HeaderCellSelect,
	CellSelect,
	SelectClickTypes,
	SelectTypes,
	useRowSelect,
} from "@table-library/react-table-library/select";

import { nodes } from "../../data";

const RegisteredUserTable = () => {
	const data = { nodes };

	const theme = useTheme({
		Table: `
        --data-table-library_grid-template-columns:  24px repeat(5, minmax(0, 1fr));
      `,
	});

	const select = useRowSelect(
		data,
		{
			onChange: onSelectChange,
		},
		{
			clickType: SelectClickTypes.ButtonClick,
		},
	);

	function onSelectChange(action, state) {
		console.log(action, state);
	}

	return (
		<Table data={data} theme={theme} layout={{ custom: true }} select={select}>
			{(tableList) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCell>Name</HeaderCell>
							<HeaderCell>Email</HeaderCell>
							<HeaderCell>Date</HeaderCell>
							<HeaderCell>Status</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row key={item.id} item={item}>
								<CellSelect item={item} />
								<Cell>{item.name}</Cell>
								<Cell>
									{item.deadline.toLocaleDateString("en-US", {
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
									})}
								</Cell>
								<Cell>{item.type}</Cell>
								<Cell>{item.isComplete.toString()}</Cell>
								<Cell>{item.nodes?.length}</Cell>
							</Row>
						))}
					</Body>
				</>
			)}
		</Table>
	);
};

export default RegisteredUserTable;
