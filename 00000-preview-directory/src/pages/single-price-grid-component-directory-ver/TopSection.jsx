import './App.css';

function TopSection() {
    return (
        <>
            <div className="w-full sm:h-[45%] h-[302.4px] m-0 p-0 ">
                <div className="sm:mt-11 mt-7 sm:ml-10 ml-6 sm:mr-20 mr-6 mb-0">
                    <h1 className="text-price-grid-theme-cyan font-bold text-2xl">Join our community</h1>
                    <h2 className="text-price-grid-theme-bright-yellow font-bold text-lg mt-4 mb-3">30-day, hassle-free money back guarantee</h2>
                    <p className="text-price-grid-theme-grayish-blue text-base leading-8">
                        Gain access to our full library of tutorials along with expert code reviews.
                        Perfect for any developers who are serious about honing their skills.
                    </p>
                </div>
            </div>
        </>
    )
}

export default TopSection;