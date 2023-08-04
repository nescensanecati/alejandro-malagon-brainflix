import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import UploadPage from './Pages/UploadPage/UploadPage';
import VideoPage from './Pages/VideoPage/VideoPage'

function App() {
	return (
		<>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<VideoPage />}></Route>
				<Route path='/video/:idFromParams' element={<VideoPage />}></Route>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/upload" element={<UploadPage />} />
			</Routes>
		</BrowserRouter>
		</>
	);
}

export default App;
