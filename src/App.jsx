import React from "react";
import { Button, Container, Box, TextField } from "@mui/material";
import axios from "axios";

function App() {
  //get Data

  const getData = async (e) => {
    e.preventDefault();
    // alert("ok")
    const { data } = await axios.get("http://localhost:1000");
    // console.log(data);
  };

  //Delete Data

  function deleteData(e) {
    e.preventDefault();
    axios.delete("http://localhost:1000").then((res) => {
      // console.log(res.data);
    });
  }

  //Post data

  async function postData(e) {
    e.preventDefault();
    let form = e.target;
    //console.log(form);
    // console.log(form[0].value);
    // console.log(form[2].value)
    // console.log(form[4].value)
    // console.log(form[6].value)
    // const data ={
    //   userId:form[0].value,
    //   id:form[2].value,
    //   title:form[4].value,
    //   body:form[6].value
    // }
    // //console.log(data);
    const data = new FormData(form);
    const res = await axios.post("http://localhost:1000", data);
    // console.log(res.data);
  }

  //Put data or Update Data

  async function putData(e) {
    e.preventDefault();
    const data = {
      title: "CNC WEB WORLD",
      body: "Remove Your Fresher Tag",
    };
    const res = await axios.put("http://localhost:1000/99", data);
    // console.log(res.data);
  }

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Button variant="contained" sx={{ mr: 2 }} onClick={getData}>
          Get Data
        </Button>
        <Button variant="contained" sx={{ mr: 2 }} onClick={deleteData}>
          Delete Data
        </Button>
        <Button variant="contained" sx={{ mr: 2 }} onClick={putData}>
          Put Data
        </Button>
        {/* <Button variant="contained" sx={{mr:2}} onClick={postData}>Add Data</Button> */}
      </Container>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Box
          component="form"
          onSubmit={postData}
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-number"
              label="userId"
              type="number"
              name="userId"
            />
            <TextField
              id="outlined-number"
              label="id"
              type="number"
              name="id"
            />
            <TextField id="outlined-required" label="Title" name="title" />
            <TextField id="outlined-required" label="Body" name="body" />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Submit
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default App;
