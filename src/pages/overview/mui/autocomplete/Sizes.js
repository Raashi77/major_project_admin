import PropTypes from 'prop-types';
// @mui
import { TextField, Autocomplete } from '@mui/material';

// ----------------------------------------------------------------------

Sizes.propTypes = {
  options: PropTypes.array,
};

export default function Sizes({ options }) {
  return (
    <>
      <Autocomplete
        fullWidth
        options={options}
        getOptionLabel={(option) => option.title}
        defaultValue={options[13]}
        renderInput={(params) => <TextField {...params} label="Size Medium" placeholder="Favorites" />}
      />
      <br />
      <Autocomplete
        fullWidth
        multiple
        size="small"
        options={options}
        getOptionLabel={(option) => option.title}
        defaultValue={[options[13]]}
        renderInput={(params) => <TextField {...params} label="Size small" placeholder="Favorites" />}
      />
    </>
  );
}
