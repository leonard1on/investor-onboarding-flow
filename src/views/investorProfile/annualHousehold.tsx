import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

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
          <FormControlLabel value={1} control={<Radio />} label="Under $200,000" />
          <FormControlLabel value={2} control={<Radio />} label="$201,000 - $500,000" />
          <FormControlLabel value={3} control={<Radio />} label="$501,000 - $1,000,000" />
          <FormControlLabel value={4} control={<Radio />} label="$1,000,000 +" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default AnnualHousehold;