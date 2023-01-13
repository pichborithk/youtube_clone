import Categories from './Categories';
import { Stack } from '@mui/material';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    <Categories
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  </Stack>
);

export default Sidebar;
