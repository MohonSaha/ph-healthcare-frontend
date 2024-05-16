import { tagTypes } from "../tag-types";
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
      invalidatesTags: [tagTypes.specialties],
    }),
    getAllSpecialist: build.query({
      query: () => ({
        url: "/specialities",
        method: "GET",
      }),
      providesTags: [tagTypes.specialties],
    }),
    deleteSpeciality: build.mutation({
      query: (id) => ({
        url: `/specialities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialties],
    }),
  }),
});

export const {
  useCreateSpecialtyMutation,
  useGetAllSpecialistQuery,
  useDeleteSpecialityMutation,
} = specialtiesAPi;
