import '../styles/style.css';
import '../styles/animate.css';
import '../styles/flexslider.css';
import '../styles/icomoon.css';
import '../styles/owl.carousel.min.css';
import '../styles/pricing.css';
import '../styles/owl.theme.default.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-phone-input-2/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';

const queryClient = new QueryClient();
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} /> <ToastContainer />
    </QueryClientProvider>
  );
}
export default MyApp;
