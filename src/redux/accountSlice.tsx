import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

export interface AccountState {
  user:{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  },
  investorProfile: {
    annualHouseholdIncome: string;
    netWorth: string;
    qualifiedPurchase: boolean;
  },
  identityVerification: {
    citizenship: string[];
    taxResidence: string;
    employmentStatus: string;
  }
}

const initialState: AccountState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  investorProfile: {
    annualHouseholdIncome: '',
    netWorth: '',
    qualifiedPurchase: false
  },
  identityVerification: {
    citizenship: [],
    taxResidence: '',
    employmentStatus: ''
  }
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AccountState['user']>) => {
      state.user = action.payload;
    },
    setInvestorProfile: (state, action: PayloadAction<AccountState['investorProfile']>) => {
      state.investorProfile = action.payload;
    },
    setIdentityVerification: (state, action: PayloadAction<AccountState['identityVerification']>) => {
      state.identityVerification = action.payload;
    }
  }
});

export const {setUser, setInvestorProfile, setIdentityVerification} = accountSlice.actions;
export default accountSlice.reducer;