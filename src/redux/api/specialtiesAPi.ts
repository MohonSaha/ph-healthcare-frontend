import { baseApi } from "./baseApi";

const specialtiesAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialities",
        method: "POST",
        contentType: "multipart/form-data",
        data: data,
      }),

      // invalidatesTags: [tagTypes.specialties],
    }),
  }),
});

export const { useCreateSpecialtyMutation } = specialtiesAPi;
