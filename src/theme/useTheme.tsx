import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

export const useTheme = () => useContext(ThemeContext);
