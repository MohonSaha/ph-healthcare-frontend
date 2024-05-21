"use client";
import { Box, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { dateFormatter } from "@/utils/dateFormatter";
import { ISchedule } from "@/types/schedule";
import dayjs from "dayjs";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";

const DoctorSchedlesPage = () => {
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  // transform the schedule data to create table
  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule, index: number) => {
      return {
        sl: index + 1,
        id: schedule?.scheduleId,
        startDate: dateFormatter(schedule?.schedule?.startDateTime),
        // endDate: dateFormatter(schedule?.schedule?.endDateTime),
        startTime: dayjs(schedule?.schedule?.startDateTime).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule?.endDateTime).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>

            <IconButton color="secondary" aria-label="">
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button
        onClick={() => setIsModalOpen(true)}
        endIcon={<AddIcon />}
        sx={{ mt: 3.5 }}
      >
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      <Box sx={{ mb: 2 }}>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={allSchedule ?? []} columns={columns} />
          </Box>
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedlesPage;
