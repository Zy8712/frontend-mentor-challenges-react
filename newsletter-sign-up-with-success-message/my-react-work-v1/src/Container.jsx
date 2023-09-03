import './App.css';
import InfoDiv from './InfoDiv';
import ImgDiv from './ImgDiv';

function Container({ toggleSuccessBox, handleEmailChange }) {

  return (
    <>
      <div className="w-[850px] h-[580px] bg-theme-white rounded-[30px]">
        <div className=" w-[802px] h-[532px] flex m-6">
          <div className="w-1/2 h-full">
            <InfoDiv toggleSuccessBox={ toggleSuccessBox } handleEmailChange={ handleEmailChange } />
          </div>
          <div className="w-1/2 h-full">
            <ImgDiv />
          </div>
        </div>
      </div>
    </>
  )
}

export default Container;
