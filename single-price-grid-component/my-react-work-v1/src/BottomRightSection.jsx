import './App.css';

function BottomRightSection() {
    return (
        <>
            <div className="sm:w-1/2 w-full sm:h-full h-1/2 bg-theme-cyan opacity-80">
                <div className="sm:mt-9 mt-7 ml-10 mr-20 mb-0">
                    <h4 className="text-lg font-bold text-white mb-4">Why Us</h4>
                    <p className="text-theme-light-gray">Tutorials by industry experts</p>
                    <p className="text-theme-light-gray">Peer & expert code review</p>
                    <p className="text-theme-light-gray">Coding exercises</p>
                    <p className="text-theme-light-gray">Access to our GitHub repos</p>
                    <p className="text-theme-light-gray">Community forum</p>
                    <p className="text-theme-light-gray">Flashcard decks</p>
                    <p className="text-theme-light-gray">New videos every week</p>
                </div>
            </div>
        </>
    )
}

export default BottomRightSection;