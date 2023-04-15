import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FamilyProvider from './providers/FamilyProvider';
import ModalProvider from './providers/ModalProvider';

function App() {
  return (
    <div>
      <ModalProvider>
        <Header />
        <main>
          <FamilyProvider>
            <Home />
          </FamilyProvider>
        </main>
        <Footer />
      </ModalProvider>
    </div>
  );
}

export default App;
