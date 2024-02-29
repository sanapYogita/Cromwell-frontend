import { styled } from '@mui/system';
import {theme} from "./theme"
// export const CenteredContainer = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh', // Adjust as needed
//   backgroundColor: theme.palette.background.default, // Use theme properties
//   color: theme.palette.text.primary,
//   // Add other styles using theme properties
// }));



export const CenteredContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Adjust as needed
  backgroundColor: theme.palette.background.default, // Use theme properties
  color: theme.palette.text.primary,
  // Add other styles using theme properties
}));
