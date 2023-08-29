import './App.css';
import SectionSedan from './SectionSedan';
import SectionSUV from './SectionSUV';
import SectionLuxury from './SectionLuxury';

function Container() {
    return (
        <>
            <div className="sm:w-[864px] sm:h-[460px] w-[288px] h-[1380px] flex sm:flex-row flex-col rounded-xl overflow-hidden">
                <SectionSedan />
                <SectionSUV />
                <SectionLuxury />
            </div>
        </>
    );
}

export default Container;