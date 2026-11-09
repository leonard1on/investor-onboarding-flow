import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { annualHouseholdIncomeOptions } from "../../services/utils";

const AnnualHousehold = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <Box>
      <h2>What is your annual household income?</h2>
      <p className="align-left">
        Please include all sources of income, such as salary, bonuses, rental properties and investments. If you have a spouse or spousal equivalent, please choose your joint income level:
      </p>
      <FormControl sx={{ m: 3, display: 'flex', flexDirection: 'column' }}>
        <RadioGroup
          aria-labelledby="annual-household-label"
          name="annual-household"
          value={value}
          onChange={handleChange}
        >
          {Object.entries(annualHouseholdIncomeOptions).map(([optionValue, label]) => (
            <FormControlLabel
              key={optionValue}
              value={Number(optionValue)}
              control={<Radio />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default AnnualHousehold;