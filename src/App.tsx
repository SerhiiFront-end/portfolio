import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Header from "./UI/Header/Header"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<h1>h1</h1>}></Route>
					<Route path='/skills' element={<h1>h1</h1>}></Route>
					<Route path='/projects' element={<h1>h1</h1>}></Route>
					<Route path='/biography' element={<h1>h1</h1>}></Route>
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</div>
	)
}

export default App
