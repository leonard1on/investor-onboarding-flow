import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Interstitial from "../../components/interstitial/interstitial";
import CitizenshipVerification from "./citizenshipVerification";
import TaxResidenceVerification from "./taxResidenceVerification";
import EmploymentVerification from "./employmentVerification";

// import './investorProfile.css';
const IdentityVerificationWrapper = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [citizenshipSelection, setCitizenshipSelection] = useState<string[]>([]);
  const [taxResidencSelection, taxResidenceSelection] = useState<string>("");
  const [employmentSelection, setEmploymentSelection] = useState<string>("");

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CitizenshipVerification value={citizenshipSelection} onChange={setCitizenshipSelection} />;
      case 2:
        return <TaxResidenceVerification value={taxResidencSelection} onChange={taxResidenceSelection} />;
      case 3:
        return <EmploymentVerification value={employmentSelection} onChange={setEmploymentSelection} />;
      default:
        return <div>Invalid investor profile step</div>;
    }
  };

  const continueStep = () => {
    setCurrentStep((step) => Math.min(step + 1, 3));
  }

  const returnStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  }

  return (
    <Container>
      {currentStep === 0 
      ?
        <Interstitial
          open={currentStep === 0}
          onClose={continueStep}
          title="A few more questions to complete your account set-up"
          description="As the last step in identity verification, FINRA, our regulator, requires us to ask about citizenship, employment and potential conflicts of interest."
        />
      :
        <Container>
          <Grid container>
            <Grid size={6} sx={{display: 'flex', justifyContent: 'flex-start'}}>
              <Button onClick={returnStep} disabled={currentStep === 1}>
                {"<"}
              </Button>
            </Grid>
            <Grid size={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <p>{currentStep} / 3</p>
            </Grid>
          </Grid>
          {renderStep()}
          <Button
            variant="contained"
            onClick={continueStep}
            disabled={currentStep === 3}
            sx={{ mt: 2}}
            >
              Next
          </Button>
        </Container>
        }
    </Container>
  );
};

export default IdentityVerificationWrapper;