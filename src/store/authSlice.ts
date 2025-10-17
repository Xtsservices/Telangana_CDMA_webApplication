import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserRole = 'ULB' | 'RI' | 'Commissioner' | 'CDMA' | 'CGG' | 'Admin';

interface AuthState {
  isAuthenticated: boolean;
  mobile: string | null;
  role: UserRole | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  mobile: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ mobile: string; role: UserRole }>) => {
      state.isAuthenticated = true;
      state.mobile = action.payload.mobile;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.mobile = null;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
