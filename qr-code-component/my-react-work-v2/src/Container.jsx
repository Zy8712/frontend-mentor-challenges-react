import QRCode from "./assets/image-qr-code.png";

function Container() {

    return (
        <>
            <div className="w-80 bg-white rounded-2xl shadow-xl">
                <div className="m-4">
                    <div className="rounded-lg overflow-hidden">
                        <img src={QRCode} alt="qr_code_img" />
                    </div>
                    <div className="mt-5 ml-3 mr-3 mb-8 text-center">
                        <h1 className="text-dark-blue text-[22px] font-bold">Improve your front-end skills by building projects</h1>
                        <p className="mt-3 mb-1 text-grayish-blue text-[15px] font-normal">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container;
