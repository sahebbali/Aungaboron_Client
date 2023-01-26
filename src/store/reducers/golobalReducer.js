import { createSlice } from "@reduxjs/toolkit";

const golobalReducer =createSlice({
    name: 'golobal',
    initialState: {
        success : '',
        searchBar : false,
    },
       reducers: {
          setSuccess: (state, action)=>{
               state.success= action.payload;
          },
          clearMessage: (state)=>{
            state.success = '';
          },
          toggleSearchBar: (state) => {
            state.searchBar = !state.searchBar;
          },
       }
    
   });

   export const {setSuccess,clearMessage,toggleSearchBar}=golobalReducer.actions;
   export default golobalReducer.reducer;
   