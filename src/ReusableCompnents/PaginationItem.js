import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { UPDATE_PRODUCTS_PROPS } from "../Redux/Actions/types";

export default function PaginationItem({ pages, data, general }) {
  const handleChange = (event, value) => {
    general(
      [{ prop: "data.current_page", value: value }],
      UPDATE_PRODUCTS_PROPS
    );
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={pages.length}
        page={data.current_page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
