import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect, useState } from 'react'
import FlagList from './components/Flags/FlagList'

const App = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('http://localhost:3002/flags')
			.then(res => res.json())
			.then(data => setData(data))
			.catch(error => {
				console.log(`Erorr request - ${error}`)
				setError(error)
			})
			.finally(() => setLoading(false))
	}, [])

	if (loading) return 'Please wait. Loading...'
	if (error) return `${error}`
	return (
		<div className='App'>
			<a href='https://reactjs.org' target='_blank'>
				<img src={reactLogo} className='logo react' alt='React logo' />
			</a>
			<h1>How to use fetch() + map() on React</h1>
			<div className='container'>
				<div className='flags'>
					<FlagList data={data} />
				</div>
			</div>
		</div>
	)
}

export default App
