import { type RootState } from '../../redux/store';
import { useSelector } from "react-redux";
import { useSubmitOnboardingMutation } from "../../services/accountApi";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import MoneyTree from "../../assets/Stock.jpg";

const InvestScreen = () => {
  const account = useSelector((state: RootState) => state.account);
  const [submitOnboarding, { isLoading, isSuccess, isError, data }] =
    useSubmitOnboardingMutation();
  
  const handleInvestment = () => {
    submitOnboarding(account);
  }

  return (
    <Box>
      <Grid container sx={{mt: 2, p:2, alignItems: "stretch"}} spacing={2}>
        <Grid size={4} sx={{ display: "flex" }}>
          <img
            src={MoneyTree}
            alt="Money Tree Investment"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid size={8}>
          <h2>You're ready to invest on Willow Wealth</h2>
          <p className="align-left">
            Choose the path that's best for you below, whether you prefer to hand pick your investment portfolio or let Willow Wealth do the work for you
          </p>
            <Card sx={{boxShadow: 3, mt: 1}} className="align-left">
              <CardActionArea onClick={handleInvestment} disabled={isLoading}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Select your own investments
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Explore a wide range of curated private markets investments spanning real
                    estate, private credit, private equity, and more.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{boxShadow: 3, mt: 1}} className="align-left">
              <CardActionArea onClick={handleInvestment} disabled={isLoading}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Set up a Managed Portfolio
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Select a strategy, and we'll assemble a porfolio of diversified funds
                    from prominent asset managers.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          {isLoading && (
            <Typography role="status">Submitting your onboarding information...</Typography>
          )}
          {isSuccess && <Typography role="status">{data?.message}</Typography>}
          {isError && (
            <Typography role="alert" color="error">
              Could not submit your onboarding information. Please try again.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvestScreen;