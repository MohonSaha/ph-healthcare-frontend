import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import PHTimePicker from "@/components/Forms/PHTimePicker";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SchedulesModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);

    try {
      const res = await createSchedule(values);
      console.log(res);
      if (res?.data?.length) {
        toast.success("Schedules created successfully!");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <PHModal open={open} setOpen={setOpen} title="Create A New Schedule">
        <PHForms onSubmit={handleFormSubmit}>
          <Grid container spacing={2} sx={{ width: "400px" }}>
            <Grid item md={12}>
              <PHDatePicker name="startDate" label="Start Date" />
            </Grid>
            <Grid item md={12}>
              <PHDatePicker name="endDate" label="End Date" />
            </Grid>
            <Grid item md={6}>
              <PHTimePicker name="startTime" label="Start Time" />
            </Grid>
            <Grid item md={6}>
              <PHTimePicker name="endTime" label="End Time" />
            </Grid>
          </Grid>
          <Button type="submit" sx={{ mt: 1 }}>
            Create
          </Button>
        </PHForms>
      </PHModal>
    </div>
  );
};

export default SchedulesModal;
