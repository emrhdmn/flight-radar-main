import axios from "axios";
import { options } from "../../helpers/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  const res = await axios.request(options);

  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lng: flight[3],
  }));

  return newData;
});
