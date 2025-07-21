import { createSlice } from '@reduxjs/toolkit';

const labourDaysSlice = createSlice({
  name: 'labourDays',
  initialState: {
    labourDays: {}
  },
  reducers: {
    mergeLabourDays: (state, action) => {
      state.labourDays = action.payload;
    }
  }
});

export const { mergeLabourDays } = labourDaysSlice.actions;
export default labourDaysSlice.reducer;
