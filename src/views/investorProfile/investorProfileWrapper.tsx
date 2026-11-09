import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Interstitial from "../../components/interstitial/interstitial";
import AnnualHousehold from "./annualHousehold";
import NetWorth from "./netWorth";
import QualifiedPurchase from "./qualifiedPurchase";

import './investorProfile.css';
const InvestorProfileWrapper = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [annualHouseholdSelection, setAnnualHouseholdSelection] = useState<number>(0);
  const [netWorthSelection, setNetWorthSelection] = useState<number>(0);
  const [qualifiedPurchaseSelection, setQualifiedPurchaseSelection] = useState<number>(0);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AnnualHousehold value={annualHouseholdSelection} onChange={setAnnualHouseholdSelection} />;
      case 2:
        return <NetWorth value={netWorthSelection} onChange={setNetWorthSelection} />;
      case 3:
        return <QualifiedPurchase value={qualifiedPurchaseSelection} onChange={setQualifiedPurchaseSelection} />;
      default:
        return <div>Invalid investor profile step</div>;
    }
  };

  const continueStep = () => {
    if(currentStep === 3) {
      navigate('/identity-verification');
    }
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
          title="Welcome to WillowWealth"
          description="Let's begin setting up your individual account. Next, we'll ask a few quick questions to better understand your investor profile."
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
            sx={{ mt: 2}}
            >
              Next
          </Button>
        </Container>
        }
    </Container>
  );
};

export default InvestorProfileWrapper;