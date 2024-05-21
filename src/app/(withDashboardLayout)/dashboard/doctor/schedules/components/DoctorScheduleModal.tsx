"use client";
import PHModal from "@/components/Shared/PHModal/PHModal";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const route = useRouter();
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);
  const [clear, setClear] = useState(false);

  const query: Record<string, any> = {};
  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;

  const [createDoctorSchedule, { isLoading }] =
    useCreateDoctorScheduleMutation();

  // create doctor schedule data through selected ids
  const onSubmit = async () => {
    try {
      const res = await createDoctorSchedule({
        schedulesIds: selectedScheduleIds,
      });
      console.log(res.data.count >= 1);
      if (res.data.count >= 1) {
        setOpen(false);
        toast.success("Schedule created successfully!");
        setClear(true);
        route.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <Stack direction="column" gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={dayjs(selectedDate)}
            onChange={(newValue) =>
              setSelectedDate(dayjs(newValue).toISOString())
            }
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>
        <MultipleSelectFieldChip
          schedules={schedules}
          setSelectedScheduleIds={setSelectedScheduleIds}
          selectedScheduleIds={selectedScheduleIds}
          clear={clear}
        />

        <LoadingButton
          size="small"
          onClick={onSubmit}
          loading={isLoading}
          loadingIndicator="Submitting…"
          variant="contained"
        >
          <span>Submit</span>
        </LoadingButton>
      </Stack>
    </PHModal>
  );
};

export default DoctorScheduleModal;
