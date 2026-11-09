import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import heroImage from "../../assets/investment.png"

const Interstitial = ({ open, onClose, title, description }: { open: boolean; onClose: () => void, title: string, description: string}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-describedby="interstitial-dialog-description" sx={{borderRadius: '8px'}}>
      <Box>
        <Grid container spacing={2} sx={{m: 2, border: '1px solid #ccc', borderRadius: '8px', boxShadow: 3, p:2}}>
          <Grid size={{xs: 12, sm: 6}} sx={{ display: "flex", minWidth: 0, overflow: "hidden" }}>
            <img
              src={heroImage}
              alt="WillowWealth Logo"
              style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {description}
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{justifyContent: 'center'}}>
              <Button onClick={onClose} aria-describedby="interstitial-dialog-description" variant="contained">
                Continue
              </Button>
            </DialogActions>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default Interstitial;