import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesAPi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await createSpecialty(data).unwrap();
      //   console.log(res);
      if (res.id) {
        toast.success("Speciality created successfully!");
        setOpen(false);
      }
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
