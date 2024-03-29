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
import InputCard from "../registeredcomptable/popupcrd";
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
  const [modal, setModal] = useState(false);
  const [clickedUser, setClickedUser] = useState({});

  const toggleRow = (item) => {
    setClickedUser(item);
  };

  const handleSetUser = (item) => {
    setModal(true);
    setClickedUser(item);
  };

  const toggleAll = (item) => {
    setClickedUser(item);
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );
  };

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr
        key={item.id}
        className={cx({ [classes.rowSelected]: selected })}
        onClick={() => handleSetUser(item)}
      >
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item)}
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
        <td style={{ fontSize: "14px", color: "#5D5E5F" }}>{item.email}</td>
        <td style={{ fontSize: "14px", color: "#5D5E5F" }}>{item.date}</td>
        <td style={{ fontSize: "14px", color: "#22A57E" }}>{item.status}</td>
      </tr>
    );
  });

  return (
    <>
      {modal && <InputCard setModal={setModal} user={clickedUser} />}
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
    </>
  );
}
