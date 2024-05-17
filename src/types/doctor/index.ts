export interface IDoctor {
  id: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNo: string;
  experience: number | undefined;
  gender: "MALE" | "FEMALE";
  appointmentFee: number | undefined;
  qualification: string;
  currentWorkignPlace: string;
  designation: string;
  specialities: ISpecialities[];
}

export type ISpecialities = {
  specialitiesId: string;
  isDeleted?: null;
};

export interface IDoctorFormData {
  doctor: IDoctor;
  password: string;
}
