import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
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

const CitizenshipVerification = ({ value, onChange }: { value: string[]; onChange: (value: string[]) => void }) => {
  
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    onChange(
      typeof value === 'string' ? value.split(',') : value,
    );
  }
  
  return (
    <Box>
      <h2>What countries are you a citizen of?</h2>
      <p className="align-left">
        We are required to collect this information for regulatory purposes and determine your account eligibility.
      </p>
      <FormControl fullWidth size="small" sx={{ mt: 2 }}>
        <InputLabel id="tax-residence-label">Country of citizenship</InputLabel>
        <Select
          input={<OutlinedInput label="Country of citizenship" />}
          value={value}
          onChange={handleChange}
          multiple
        >
          {countries.map((country, index) => (
            <MenuItem key={`countries-${index}`} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
};

export default CitizenshipVerification;