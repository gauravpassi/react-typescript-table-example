import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./styles.scss";
import callGetPeople from "../../api/people/callGetPeople";
import LinearProgress from "@mui/material/LinearProgress";

const People = () => {
  const [list, setList] = useState<People[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const api = async () => {
      setLoading(true);
      const { code, data } = await callGetPeople();
      if (code === 200) {
        setList(data.results);
      }
      setLoading(false);
    };
    api();
  }, []);

  return (
    <Box p={2} className="App">
      <Typography variant={"h4"} mb={2}>
        Table View with api
      </Typography>
      <TableContainer component={Paper}>
        {loading && <LinearProgress />}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow color={"#4ade80"}>
              <TableCell>Name</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Mass&nbsp;(g)</TableCell>
              <TableCell align="right">Hair Color</TableCell>
              <TableCell align="right">Skin Color</TableCell>
              <TableCell align="right">Eye Color</TableCell>
              <TableCell align="right">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.mass}</TableCell>
                <TableCell align="right">{row.hair_color}</TableCell>
                <TableCell align="right">{row.skin_color}</TableCell>
                <TableCell align="right">{row.eye_color}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default People;
