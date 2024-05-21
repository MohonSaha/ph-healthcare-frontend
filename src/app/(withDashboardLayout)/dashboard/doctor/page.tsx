"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const DoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <TextField
          // onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search doctors"
        />
      </Stack>
    </Box>
  );
};

export default DoctorPage;
