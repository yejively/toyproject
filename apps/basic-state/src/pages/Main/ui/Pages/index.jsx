import { FontColor, FontColor2 } from './style.css';
import { ColorTag } from './style';

const Main = () => {
    return (
        <>
            <ColorTag>테스트1</ColorTag>
            <div className={FontColor}>테스트</div>
            <div className={FontColor2}>x</div>
        </>
    );
};

export default Main;
