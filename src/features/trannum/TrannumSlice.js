import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import numService from "./TrannumService";

const initialState = {
  input: "",
  output: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  MsgError: "",
};

export const arotothai = createAsyncThunk(
  "tran/arotothai",
  async (TextInput, thunkAPI) => {
    try {
      return await numService.arotothai(TextInput);
    } catch (error) {
      const message =
        (error.reponse && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const thaitoaro = createAsyncThunk(
  "tran/thaitoaro",
  async (TextInput, thunkAPI) => {
    try {
      return await numService.thaitoaro(TextInput);
    } catch (error) {
      const message =
        (error.reponse && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const tranSlice = createSlice({
  name: "tran",
  initialState,
  reducers: {
    reset: (state) => {
      state.input =  "";
      state.output = "";
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.MsgError = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(arotothai.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(arotothai.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.output = action.payload;
      })
      .addCase(arotothai.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.output = null;
      })

      .addCase(thaitoaro.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thaitoaro.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.output = action.payload;
      })
      .addCase(thaitoaro.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.output = null;
      });
  },
});

export const { reset } = tranSlice.actions;
export default tranSlice.reducer;
