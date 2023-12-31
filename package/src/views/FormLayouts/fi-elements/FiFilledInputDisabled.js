import React from "react";

import { TextField } from "@mui/material";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiFilledInputDisabled = () => {
  return (
    <BaseCard title="Filled Disabled Input">
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        disabled
        fullWidth
      />
    </BaseCard>
  );
};

export default FiFilledInputDisabled;
