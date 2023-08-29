import './App.css';
import Footer from './Footer';
import Container from './Container';

function App() {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-center md:items-center sm:items-start items-center">
        <Container />
      </main>
      <Footer />
    </>
  );
}

export default App;
