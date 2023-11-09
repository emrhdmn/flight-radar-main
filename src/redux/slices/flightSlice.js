import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./../actions/flightActions";

const initialState = {
  flight: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder
      // cevap bekleniyorsa
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      //   olumlu cevap gelirse
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flight = action.payload;
      })
      //   olumsuz cevap gelirse
      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        alert("Bir hata oluştu");
      });
  },
});

export default flightSlice.reducer;
