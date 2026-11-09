import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Ireland',
  'Malta',
  'Australia',
  'New Zealand',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Switzerland',
  'India',
  'China',
  'Japan',
];

const TaxResidenceVerification = ({ value, onChange }: { value: string; onChange: (value: string) => void; }) => {
  
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <Box>
      <h2>What is your tax residence?</h2>
      <p className="align-left">
        Willow Wealth's investments are currently only available for U.S. taxpayers. Please confirm your tax residence is correct.
      </p>
      <FormControl fullWidth size="small" sx={{ mt: 2 }}>
        <InputLabel id="tax-residence-label">Tax residence</InputLabel>
        <Select
          input={<OutlinedInput label="Country of Tax Residence" />}
          value={value}
          onChange={handleChange}
        >
          {countries.map((country, index) => (
            <MenuItem key={`tax-${index}`} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TaxResidenceVerification;