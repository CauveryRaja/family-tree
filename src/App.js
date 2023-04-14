import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FamilyProvider from './providers/FamilyProvider/FamilyProvider';

function App() {
  return (
    <div>
      <Header />
      <main>
        <FamilyProvider>
          <Home />
        </FamilyProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
