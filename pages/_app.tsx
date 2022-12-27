import { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react';
import '../shared/styles/reset.sass'
import '../shared/styles/globals.sass'
import {Layout} from '../modules/Layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </SessionProvider>
  );
};

export default App;
