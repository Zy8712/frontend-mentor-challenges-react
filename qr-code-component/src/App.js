import qrcode from './image-qr-code.png';
import './App.css';

function App() {
  return (
    <>
      <main className="w-full h-full overflow-hidden flex flex-col justify-center items-center">

        <div className="w-80 rounded-2xl custom-card-background shadow-xl">
          <div className="m-4">
            <div className="rounded-lg overflow-hidden">
              <img src={qrcode} alt="qr_code" />
            </div>
            <div className="mt-5 ml-3 mr-3 mb-8 text-center">
              <h1 className="custom-text-color-dark-blue font-bold">Improve your front-end skills by building projects</h1>
              <p className="mt-3 custom-text-color-grayish-blue font-normal">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
          </div>

        </div>
      </main>

      <footer className="w-full absolute bottom-8">
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Bryan Li</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
