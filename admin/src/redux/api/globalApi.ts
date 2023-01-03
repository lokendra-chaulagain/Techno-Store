import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Banner, Category, Contact, SmallBanner, Subscriber } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),

  tagTypes: ["Banner", "SmallBanner", "Category", "Subscriber", "Contact"],
  endpoints: (builder) => ({
    getBanners: builder.query<Banner[], void>({
      query() {
        return {
          url: `/banner`,
          // credentials: "include",
        };
      },
      transformResponse: (res: Banner[]) => res.sort((a: Banner, b: Banner) => b.id - a.id),
      providesTags: ["Banner"],
    }),

    getBanner: builder.query<Banner, number>({
      query(id) {
        return {
          url: `/banner/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Banner"],
    }),

    createNewBanner: builder.mutation<Banner, FormData>({
      query(newBanner) {
        return {
          url: "/banner",
          method: "POST",
          // credentials: 'include',
          body: newBanner,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    updateBanner: builder.mutation<Banner, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/banner/${id}`,
          method: "PATCH",
          // credentials: 'include',
          body: updatedData,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    deleteBanner: builder.mutation<Banner, number>({
      query(id) {
        return {
          url: `/banner/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Banner"],
    }),

    // Small Banner==================================================>
    getSmallBanners: builder.query<SmallBanner[], void>({
      query() {
        return {
          url: `/smallBanner`,
          // credentials: "include",
        };
      },
      transformResponse: (res: SmallBanner[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["SmallBanner"],
    }),

    //Category ================================================================>
    getCategories: builder.query<Category[], void>({
      query() {
        return {
          url: `/category`,
          // credentials: "include",
        };
      },
      transformResponse: (res: Category[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Category"],
    }),

    getCategory: builder.query<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Category"],
    }),

    createNewCategory: builder.mutation<Category, FormData>({
      query(newCategory) {
        return {
          url: "/category",
          method: "POST",
          // credentials: 'include',
          body: newCategory,
        };
      },
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation<Category, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/category/${id}`,
          method: "PATCH",
          // credentials: 'include',
          body: updatedData,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Category"],
    }),

    // Subscriber------------------------------------->
    getSubscribers: builder.query<Subscriber[], void>({
      query() {
        return {
          url: `/subscriber`,
        };
      },
      transformResponse: (res: Subscriber[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Subscriber"],
    }),

    deleteSubscriber: builder.mutation<Subscriber, number>({
      query(id) {
        return {
          url: `/subscriber/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Subscriber"],
    }),

    // Contact----------------------------------------->
    getContacts: builder.query<Contact[], void>({
      query() {
        return {
          url: `/contact`,
        };
      },
      transformResponse: (res: Contact[]) => res.sort((a: Contact, b: Contact) => b.id - a.id),
      providesTags: ["Contact"],
    }),

    getContact: builder.query<Contact, number>({
      query(id) {
        return {
          url: `/contact/${id}`,
        };
      },
      providesTags: ["Contact"],
    }),

    updateContact: builder.mutation<Contact, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/contact/${id}`,
          method: "PATCH",
          body: updatedData,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    deleteContact: builder.mutation<Contact, number>({
      query(id) {
        return {
          url: `/contact/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetBannersQuery,
  useDeleteBannerMutation,
  useCreateNewBannerMutation,
  useUpdateBannerMutation,

  useGetSmallBannersQuery,
  useGetCategoriesQuery,
  useGetCategoryQuery,

  useCreateNewCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,

  useGetSubscribersQuery,
  useDeleteSubscriberMutation,

  useGetContactsQuery,
  useGetContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = globalApi;
