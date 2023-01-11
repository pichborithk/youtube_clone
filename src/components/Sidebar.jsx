import Categories from './Categories';
import { Stack } from '@mui/material';

const Sidebar = () => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    <Categories />
  </Stack>
);

export default Sidebar;
