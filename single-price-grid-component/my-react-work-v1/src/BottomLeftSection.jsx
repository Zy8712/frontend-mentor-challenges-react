import './App.css';

function BottomLeftSection() {
    return (
        <>
            <div className="w-1/2 h-full bg-theme-cyan">
                <div className="mt-9 ml-10 mr-10 mb-0">
                    <h3 className="text-lg font-bold text-white mb-6">Monthly Subscription</h3>
                    <p className="text-base font-bold text-theme-light-gray mb-1"><span className="text-3xl font-bold text-white mr-1">$29</span>per month</p>
                    <p className="text-white mb-8">Full access for less than $1 a day</p>
                    <button className="bg-theme-bright-yellow text-white font-bold px-[100px] py-3 rounded shadow-lg">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default BottomLeftSection;