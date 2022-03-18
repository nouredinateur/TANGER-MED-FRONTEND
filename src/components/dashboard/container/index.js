import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function Container() {
  const [containers, setContainers] = React.useState([]);
  React.useEffect(() => {
    try {
      let token = localStorage.getItem("token");
      fetch("http://localhost:1337/api/v1/container/getAllcontainer", {
        method: "GET",
        mode: "cors",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((res) => {
          setContainers(res.data.doc);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function deleteContainer(e) {
    let id = e.target.value
    let token = localStorage.getItem("token");
    fetch(`http://localhost:1337/api/v1/container/${id}`, {
      method: 'DELETE',
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => window.location.reload).catch((err) => {
      console.log(err);
    });
    window.location.reload();
  }

  return (
    <div className="w-full p-16 ">
      <div className="w-3/4 mx-auto my-8 ">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Brand</StyledTableCell>
                <StyledTableCell align="right">
                  Weight &nbsp;(kg)
                </StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {containers.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.brand}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.weight}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.position}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button value={row._id} key={row._id} onClick={deleteContainer} variant="outlined">
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
