import { useContext } from 'react';
import { ThemeContext } from '../../App';

export const useTheme = () => {
  return useContext(ThemeContext);
};
