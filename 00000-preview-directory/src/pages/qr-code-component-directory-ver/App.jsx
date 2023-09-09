import './App.css';
import QRCodeCard from './QRCodeCard';
import Footer from './Footer';

function App() {
  return (
    <>
      <main className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center custom-page-background">
        <QRCodeCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
