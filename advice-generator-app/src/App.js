import './App.css';
import GenerateAdviceBlock from './GenerateAdviceBlock';
import Footer from './Footer';

function App() {
  return (
    <>
      <main className="w-full h-full overflow-hidden flex flex-col justify-center items-center">
        <GenerateAdviceBlock />
      </main>
      <Footer />
    </>
  );
}

export default App;
