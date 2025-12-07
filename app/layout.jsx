import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "PromptBook ",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <div className='relative z-10 flex flex-col min-h-screen'>
          <main className='app flex-grow'>
            <Nav />
            {children}
          </main>
          <Footer />
        </div>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
