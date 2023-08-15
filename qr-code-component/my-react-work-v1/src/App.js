import './App.css';
import QRCodeCard from './QRCodeCard';
import Footer from './Footer';

function App() {
  return (
    <>
      <main className="w-full h-full overflow-hidden flex flex-col justify-center items-center">
        <QRCodeCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
