import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { FbDefaultForm } from "../../views/FormLayouts/fb-elements";
import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
} from "@mui/material";

const numbers = [
  {
    value: "one",
    label: "One",
  },
  {
    value: "two",
    label: "Two",
  },
  {
    value: "three",
    label: "Three",
  },
  {
    value: "four",
    label: "Four",
  },
];
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// const Props = {
//   slug,
//   columns,
//   setOpen
// };

const Add = ({
  slug,
  columns,
  setOpen
}) => {

  // TEST THE API

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState("");

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState("");

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    setOpen(false)
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          
        <div >
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Card
      
        variant="outlined"
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Box
          sx={{
            padding: "15px 30px",
          }}
          display="flex"
          alignItems="center"
        >
          {/* <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Default Form
            </Typography>
          </Box> */}
        </Box>
        <Divider />
        <CardContent
      
          sx={{
            padding: "30px",
          }}
        >
          <form>
            <TextField
              id="default-value"
              label="Default Text"
              variant="outlined"
              defaultValue="George deo"
              fullWidth
              sx={{
                mb: 2,
              }}
            />

            <TextField
              id="email-text"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Textarea"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="readonly-text"
              label="Read Only"
              defaultValue="Hello World"
              inputprops={{
                readOnly: true,
              }}
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            >
              <Grid item lg={4} md={6} sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      color="primary"
                    />
                  }
                  label="Check this custom checkbox"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Check this custom checkbox"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedC}
                      onChange={handleChange}
                      name="checkedC"
                      color="primary"
                    />
                  }
                  label="Check this custom checkbox"
                />
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange2}
                  >
                    <FormControlLabel
                      value="radio1"
                      control={<Radio />}
                      label="Toggle this custom radio"
                    />
                    <FormControlLabel
                      value="radio2"
                      control={<Radio />}
                      label="Toggle this custom radio"
                    />
                    <FormControlLabel
                      value="radio3"
                      control={<Radio />}
                      label="Toggle this custom radio"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Select"
              value={number}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div>
              <Button color="primary" variant="contained">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>

          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
