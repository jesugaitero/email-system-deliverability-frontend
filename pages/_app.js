
import '../css/main.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from '../context';

function MyApp ({Component, pageProps}) {
  return (
    <Provider>
      <ToastContainer postion="top-center"/>
      <Component {...pageProps}/>
    </Provider> 
  )
}
export default MyApp; 