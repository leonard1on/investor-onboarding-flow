import { useEffect } from "react";

import { store } from "../../redux/store";

const InvestScreen = () => {
  useEffect(() => {
    const { user, investorProfile, identityVerification } =
      store.getState().account;

    console.log("User information:", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    console.log("Investor profile:", investorProfile);
    console.log("Identity verification:", identityVerification);
  }, []);

  return <div>Ready to invest</div>;
};

export default InvestScreen;