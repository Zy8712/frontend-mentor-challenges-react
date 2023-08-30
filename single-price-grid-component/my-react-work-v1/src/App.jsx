import './App.css';
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import Footer from './Footer';

function App() {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-[700px] h-[520px] flex flex-col bg-white rounded-lg text-left overflow-hidden">
          <TopSection />
          <BottomSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
