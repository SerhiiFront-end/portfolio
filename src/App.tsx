import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Biography from "./pages/BiographyPage"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import SkillsPage from "./pages/SkillsPage"
import Footer from "./UI/Footer/Footer"
import Header from "./UI/Header/Header"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/skills' element={<SkillsPage />}></Route>
					<Route path='/projects' element={<ProjectsPage />}></Route>
					<Route path='/biography' element={<Biography />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
