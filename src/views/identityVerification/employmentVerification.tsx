
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

const employmentStatuses = [
  "Employed",
  "Self-employed",
  "Retired",
  "Student",
  "Not employed"
];

const EmploymentVerification = ({ value, onChange }: { value: string; onChange: (value: string) => void; }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <Box>
      <h2>What's your employment status?</h2>
      <p className="align-left">
        We're required to ask for this information for regulatory purposes.
      </p>
      <FormControl fullWidth size="small" sx={{ mt: 2 }}>
        <InputLabel id="tax-residence-label">Employment status</InputLabel>
        <Select
          input={<OutlinedInput label="Employment status" />}
          value={value}
          onChange={handleChange}
          renderValue={(selected) =>
            selected
              ? employmentStatuses.find((status) => status === selected)
              : "Employment status"
          }
        >
          {employmentStatuses.map((status, index) => (
            <MenuItem key={`employment-${index}`} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EmploymentVerification;