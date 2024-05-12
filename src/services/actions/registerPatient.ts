// server action function: to connect with server

"use server";

export const registerPetient = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,
    {
      method: "POST", // no need to add headers because it is a form data.
      body: formData,
      cache: "no-store",
    }
  );

  const patientInfo = await res.json();

  return patientInfo;
};
