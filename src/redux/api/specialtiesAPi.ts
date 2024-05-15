import { baseApi } from "./baseApi";

const specialtiesAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        url: "/specialities",
        method: "post",
        ContentType: "multipart/form-data",
        data,
      }),
    }),
  }),
});

export const { useCreateSpecialityMutation } = specialtiesAPi;
