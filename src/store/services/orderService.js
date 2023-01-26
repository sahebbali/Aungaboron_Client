import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderService = createApi({
  reducerPath: "orders",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getOrders: builder.query({
        query: (page) => {
          return {
            url: `/orders/${page}`,
            method: "GET",
          };
        },
      }),
      details: builder.query({
        query: (id) => {
          return {
            url: `/order-details/${id}`,
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useGetOrdersQuery,useDetailsQuery } = orderService;
export default orderService;