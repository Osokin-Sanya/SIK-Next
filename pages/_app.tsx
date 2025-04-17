import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../src/context/LanguageContext';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../src/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  );
}
