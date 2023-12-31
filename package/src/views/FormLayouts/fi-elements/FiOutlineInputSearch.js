import React from "react";

import { TextField } from "@mui/material";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputSearch = () => {
  return (
    <BaseCard title="Outlined Input Search">
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        fullWidth
        variant="outlined"
      />
    </BaseCard>
  );
};

export default FiOutlineInputSearch;
