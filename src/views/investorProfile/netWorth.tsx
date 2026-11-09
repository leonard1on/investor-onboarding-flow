import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { netWorthOptions } from "../../services/utils";

const NetWorth = ({ value, onChange }: { value: number; onChange: (value: number) => void; }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <Box>
      <h2>What is your net worth?</h2>
      <p className="align-left">Please include all your assets, minus your primary residence and liabilities. If you have a spouse or spousal equivalent, please choose your joint net worth:</p>
      <FormControl sx={{ m: 3, display: "flex", flexDirection: "column" }}>
        <RadioGroup
          aria-label="net-worth"
          name="net-worth"
          value={value}
          onChange={handleChange}
        >
          {Object.entries(netWorthOptions).map(([optionValue, label]) => (
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

export default NetWorth;