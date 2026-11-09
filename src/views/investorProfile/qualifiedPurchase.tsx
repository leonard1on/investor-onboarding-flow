import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const QualifiedPurchase = ({ value, onChange, }: { value: boolean; onChange: (value: boolean) => void; }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") {
      onChange(true);
    }else{
      onChange(false);
    }
  };

  return (
    <Box>
      <h2>Are you a qualified purchaser?</h2>
      <p className="align-left">Individual qualified purchasers own $5,000,000 in investments, but you are not required to be one to invest on Willow Wealth.</p>
      <FormControl sx={{ m: 3, display: "flex", flexDirection: "column" }}>
        <RadioGroup
          aria-label="qualified-purchase"
          name="qualified-purchase"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel 
            value={true} 
            control={<Radio />} 
            label={
              <p className="align-left">
                Yes
                <br />
                I meet the qualified purchaser requirements
              </p>
            } 
          />
          <FormControlLabel 
            value={false} 
            control={<Radio />} 
            label={
              <p className="align-left">
                No
                <br />
                I do not meet the qualified purchaser requirements
              </p>
              } 
            sx={{ mt: 1 }}
          />
        </RadioGroup>
      </FormControl>
      <p className="tooltip-container">
        <Tooltip arrow title="A qualified purchaser is an individual who meets certain financial thresholds set by the SEC, allowing them to invest in private placements without undergoing the same regulatory scrutiny as other investors." placement="right">
          <IconButton sx={{ fontSize: "inherit", p: 0, verticalAlign: "middle", display: "inline-flex" }}>
            <QuestionMarkIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        What is a qualified purchaser?
      </p>
    </Box>
  );
};

export default QualifiedPurchase;