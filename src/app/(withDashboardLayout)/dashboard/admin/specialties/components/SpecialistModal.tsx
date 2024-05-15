import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <PHModal open={open} setOpen={setOpen} title="Create A New Specility">
        <PHForms onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <PHInput name="title" label="Title" />
            </Grid>
            <Grid item md={6}>
              {/* <PHInput name="title" label="Title" /> */}
              <PHFileUploader name="file" label="Upload File" />
            </Grid>
          </Grid>

          <Button
            type="submit"
            sx={{
              mt: 1,
            }}
          >
            Create
          </Button>
        </PHForms>
      </PHModal>
    </div>
  );
};

export default SpecialistModal;
