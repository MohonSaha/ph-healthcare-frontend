"use client";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  return (
    <div>
      <h1>Doctor update page: {params?.doctorId}</h1>
    </div>
  );
};

export default DoctorUpdatePage;
