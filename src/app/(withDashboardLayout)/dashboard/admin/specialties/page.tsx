"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import {
  useDeleteSpecialityMutation,
  useGetAllSpecialistQuery,
} from "@/redux/api/specialtiesAPi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialistQuery({});

  const [deleteSpeciality] = useDeleteSpecialityMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpeciality(id).unwrap();
      if (res.id) {
        toast.success("Speciality deleted successfully!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={row.icon} alt="icon" width={30} height={30} />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Speciality</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>

      {!isLoading ? (
        <Box>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 8 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
