import './App.css';
import Footer from './Footer';
import Container from './Container';

function App() {
  return (
    <>
      <main className="w-screen h-screen flex flex-col justify-center items-center bg-theme-very-light-gray">
        <Container />
      </main>
      <Footer />
    </>
  );
}

export default App;
