import './App.css';

function BottomLeftSection() {
    return (
        <>
            <div className="sm:w-1/2 w-full sm:h-full h-1/2 bg-price-grid-theme-cyan">
                <div className="mt-9 ml-10 mr-10 mb-0">
                    <h3 className="text-lg font-bold text-white mb-6">Monthly Subscription</h3>
                    <p className="text-base font-bold text-price-grid-theme-light-gray mb-1"><span className="text-3xl font-bold text-white mr-1">$29</span>per month</p>
                    <p className="text-white mb-8">Full access for less than $1 a day</p>
                    <button className="bg-price-grid-theme-bright-yellow text-white hover:bg-price-grid-theme-light-gray hover:text-price-grid-theme-bright-yellow font-bold px-[100px] py-3 rounded shadow-lg">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default BottomLeftSection;