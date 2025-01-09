import Calculator from './Calculator';
import { container } from './style.css';

const Main = () => {
    return (
        <>
            <div className={container}>
                <Calculator />
            </div>
        </>
    );
};

export default Main;
