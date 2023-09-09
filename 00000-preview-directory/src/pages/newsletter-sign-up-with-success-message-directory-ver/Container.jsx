import './App.css';
import InfoDiv from './InfoDiv';
import ImgDiv from './ImgDiv';

function Container({ toggleSuccessBox, handleEmailChange }) {

  return (
    <>
      <div className="sm:w-[850px] sm:h-[580px] w-full h-full bg-newsletter-sign-up-theme-white sm:rounded-[30px]">
        <div className=" sm:w-[802px] sm:h-[532px] w-full h-full flex sm:flex-row flex-col-reverse sm:m-6">
          <div className="sm:w-1/2 sm:h-full w-full h-2/3">
            <InfoDiv toggleSuccessBox={ toggleSuccessBox } handleEmailChange={ handleEmailChange } />
          </div>
          <div className="sm:w-1/2 sm:h-full w-full h-1/3">
            <ImgDiv />
          </div>
        </div>
      </div>
    </>
  )
}

export default Container;
