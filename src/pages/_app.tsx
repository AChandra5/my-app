import { AppProps } from 'next/app';
import '../styles/globalStyles.css';
import { SnackbarProvider, useSnackbar } from 'notistack';


function MyApp({ Component, pageProps }: AppProps) {
    return(
        <SnackbarProvider>
        <Component {...pageProps} />
        </SnackbarProvider>
    )
}

export default MyApp