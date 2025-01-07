import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@/pages/Main').then(({ Main }) => ({ default: Main })));

// 동적 임포트를 위한 컴포넌트 설정
// const HomePage = loadable(() => import('@/pages/Main/ui/Pages/home'));

function RouterData() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterData;
