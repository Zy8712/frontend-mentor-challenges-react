import './App.css';

function BottomRightSection() {
    return (
        <>
            <div className="w-1/2 h-full bg-theme-cyan opacity-80">
                <div className="mt-9 ml-10 mr-20 mb-0">
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