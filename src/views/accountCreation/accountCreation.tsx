import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/accountSlice";
import { store } from "../../redux/store";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";  
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AccountCreation  = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValidated, setIsFormValidated] = useState(false);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'isChecked':
        setIsChecked(event.target.checked);
        break;
    }
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormValidated(true);
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
      return;
    }

    store.dispatch(setUser({ firstName, lastName, email, password }));
    navigate('/investor-profile');
  }

  return(
     <Container>
      <Box>
        <h1>WillowWealth</h1>
        <br />
        <h2>Create your account</h2>
        <h2>Start building a portfolio talored to</h2>
        <h2>your objectives</h2>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ flexDirection: 'column', gap: 2, mt: 2 }}>
          <TextField 
            id="firstName" 
            label="First Name*"
            name="firstName"
            aria-describedby="form-first-name-helper-text" 
            placeholder="First Name" 
            value={firstName} 
            variant="outlined"
            fullWidth
            onChange={handleValueChange} 
            sx={{ mb: 1 }}
            error={isFormValidated && !firstName.trim()}
            helperText={isFormValidated && !firstName.trim() ? 'First Name is required' : ''}
          />
          <TextField
            id="lastName"
            label="Last Name*"
            name="lastName"
            aria-describedby="form-last-name-helper-text"
            placeholder="Last Name"
            value={lastName}
            variant="outlined"
            fullWidth
            onChange={handleValueChange}
            sx={{ mb: 1 }}
            error={isFormValidated && !lastName.trim()}
            helperText={isFormValidated && !lastName.trim() ? 'Last Name is required' : ''}
          />
          <TextField
            id="email"
            label="Email*"
            name="email"
            aria-describedby="form-email-helper-text"
            placeholder="Email"
            value={email}
            variant="outlined"
            fullWidth
            onChange={handleValueChange} 
            sx={{ mb: 1 }}
            error={isFormValidated && !email.trim()}
            helperText={isFormValidated && !email.trim() ? 'Email is required' : ''}
          />
          <TextField
            id="password"
            label="Password*"
            name="password"
            aria-describedby="form-password-helper-text"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            variant="outlined"
            fullWidth
            onChange={handleValueChange} 
            sx={{ mb: 1 }}
            error={isFormValidated && !password}
            helperText={isFormValidated && !password ? 'Password is required' : ''}
            slotProps={{
              input: {
                endAdornment: (
                <Button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </Button>
                ),
              },
            }}
          />
        <FormGroup> 
          <FormControlLabel
            control={<Checkbox id="isChecked" name="isChecked" onChange={handleValueChange} />}
            label="I have read and agree to the Privacy Policy, Electronic Disclosure and Consent and Terms of Service and I consent the use of electronic records in connection with this application."
            sx={{display: "block"}}
          />
        </FormGroup>
        <Button disabled={!isChecked} type="submit" variant="contained" sx={{ mt: 2 }}>
          Continue
        </Button>
      </Box>
      <br/>
      <p>Already have an account? <a href="/login">Log in</a></p>
     </Container>
    );
}

export default AccountCreation;