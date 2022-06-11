import '../styles/globals.css';
import { wrapper } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />;
            <ToastContainer position='bottom-right' />
        </>
    );
}

export default wrapper.withRedux(MyApp);
