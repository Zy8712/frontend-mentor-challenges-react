import './App.css';
import SectionSedan from './SectionSedan';
import SectionSUV from './SectionSUV';
import SectionLuxury from './SectionLuxury';

function Container() {
    return (
        <>
            <div className="w-[864px] h-[460px] flex rounded-xl overflow-hidden">
                <SectionSedan />
                <SectionSUV />
                <SectionLuxury />
            </div>
        </>
    );
}

export default Container;