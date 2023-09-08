import React from "react";

import { Grid } from "@mui/material";

import { FbDefaultForm } from "./fb-elements/index";
// import FiDefaultInputDate  from "./fi-elements/FiDefaultInputDate";
import {
  FiDefaultInput,
  FiFilledInput,
  FiOutlineInput,
  FiInputwithHelper,
  FiFilledInputwithHelper,
  FiOutlinedInputwithHelper,
  FiDefaultInputDisabled,
  FiFilledInputDisabled,
  FiOutlineInputDisabled,
  FiDefaultInputReadOnly,
  FiFilledInputReadOnly,
  FiOutlineInputReadOnly,
  FiDefaultInputNumber,
  FiFilledInputNumber,
  FiOutlineInputNumber,
  FiDefaultInputPassword,
  FiFilledInputPassword,
  FiOutlineInputPassword,
  FiDefaultInputRequired,
  FiFilledInputRequired,
  FiOutlineInputRequired,
  FiDefaultInputSearch,
  FiFilledInputSearch,
  FiOutlineInputSearch,
  FiDefaultInputError,
  FiFilledInputError,
  FiOutlineInputError,
  FiDefaultInputErrorHelperText,
  FiFilledInputErrorHelperText,
  FiOutlineInputErrorHelperText,
  FiDefaultInputMultilineControlled,
  FiFilledInputMultilineControlled,
  FiOutlineInputMultilineControlled,
  FiDefaultInputMultiline,
  FiFilledInputMultiline,
  FiOutlineInputMultiline,
  FiDefaultSelect,
  FiFilledSelect,
  FiOutlinedSelect,
  FiDefaultNativeSelect,
  FiFilledNativeSelect,
  FiOutlinedNativeSelect,
  FiDefaultInputSmall,
  FiFilledInputSmall,
  FiOutlineInputSmall,
  FiDefaultInputGrouping,
  FiFilledInputGrouping,
  FiOutlinedInputGrouping,
  FiDefaultInputDate,
  FiFilledInputDate,
  FiOutlineInputDate,
  FiDefaultInputDateTime,
  FiFilledInputDateTime,
  FiOutlinedInputDateTime,
  FiDefaultInputTime,
  FiFilledInputTime,
  FiOutlinedInputTime,
} from "./fi-elements";
import Spinner from "../Spinner/Spinner";

const FormLayouts = () => {
  return (
    <Grid container spacing={0}>
      <Grid item lg={12} md={12} xs={12}>
        <FbDefaultForm />
        <FiDefaultInput/>
  <FiFilledInput/>
  <FiOutlineInput/>
  <FiInputwithHelper/>
  <FiFilledInputwithHelper/>
  <FiOutlinedInputwithHelper/>
  <FiDefaultInputDisabled/>
  <FiFilledInputDisabled/>
  <FiOutlineInputDisabled/>
  <FiDefaultInputReadOnly/>
  <FiFilledInputReadOnly/>
  <FiOutlineInputReadOnly/>
  <FiDefaultInputNumber/>
  <FiFilledInputNumber/>
  <FiOutlineInputNumber/>
  <FiDefaultInputPassword/>
  <FiFilledInputPassword/>
  <FiOutlineInputPassword/>
  <FiDefaultInputRequired/>
  <FiFilledInputRequired/>
  <FiOutlineInputRequired/>
  <FiDefaultInputSearch/>
  <FiFilledInputSearch/>
  <FiOutlineInputSearch/>
  <FiDefaultInputError/>
  <FiFilledInputError/>
  <FiOutlineInputError/>
  <FiDefaultInputErrorHelperText/>
  <FiFilledInputErrorHelperText/>
  <FiOutlineInputErrorHelperText/>
  <FiDefaultInputMultilineControlled/>
  <FiFilledInputMultilineControlled/>
  <FiOutlineInputMultilineControlled/>
  <FiDefaultInputMultiline/>
  <FiFilledInputMultiline/>
  <FiOutlineInputMultiline/>
  <FiDefaultSelect/>
  <FiFilledSelect/>
  <FiOutlinedSelect/>
  <FiDefaultNativeSelect/>
  <FiFilledNativeSelect/>
  <FiOutlinedNativeSelect/>
  <FiDefaultInputSmall/>
  <FiFilledInputSmall/>
  <FiOutlineInputSmall/>
  <FiDefaultInputGrouping/>
  <FiFilledInputGrouping/>
  <FiOutlinedInputGrouping/>
  <FiDefaultInputDate/>
  <FiFilledInputDate/>
  <FiOutlineInputDate/>
  <FiDefaultInputDateTime/>
  <FiFilledInputDateTime/>
  <FiOutlinedInputDateTime/>
  <FiDefaultInputTime/>
  <FiFilledInputTime/>
  <FiOutlinedInputTime/>
  <Spinner/>
      </Grid>
    </Grid>
  );
};

export default FormLayouts;
