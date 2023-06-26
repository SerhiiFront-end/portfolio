'use client'
import { useState } from 'react'
import styles from '../projects.module.scss'
export default function page() {
	const [reverseElements, setReverseElements] = useState(['↓', '↓', '↓', '↓'])
	const [state, setState] = useState(0)
	const [data, setData] = useState([
		{
			id: 0,
			name: 'test',
			people: 111,
			price: 14410,
			description: 'test description',
		},
		{
			id: 1,
			name: 'test1',
			people: 1411,
			price: 140,
			description: 'test description1',
		},
		{
			id: 2,
			name: 'aaa',
			people: 13,
			price: 13330,
			description: 'test description1',
		},
		{
			id: 3,
			name: 'bbbB',
			people: 11,
			price: 0,
			description: 'test description1',
		},
	])
	const checkCell = (states: number) => {
		if (states !== state) {
			setState(states)
			let updatedArray = [...reverseElements]
			updatedArray[states] = '↓'
			setReverseElements(updatedArray)
			switch (states) {
				case 0:
					setData([...data].sort((a, b) => a.name.localeCompare(b.name)))
					break
				case 1:
					setData([...data].sort((a, b) => b.people - a.people))
					break
				case 2:
					setData([...data].sort((a, b) => b.price - a.price))
					break
				default:
					break
			}
		} else {
			setData(data.slice().reverse())
			if (reverseElements[states] === '↓') {
				let updatedArray = [...reverseElements]
				updatedArray[states] = '↑'
				setReverseElements(updatedArray)
			} else {
				let updatedArray = [...reverseElements]
				updatedArray[states] = '↓'
				setReverseElements(updatedArray)
				setReverseElements(updatedArray)
			}
		}
	}
	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th
							className={state === 0 ? 'activated' : 'notActivated'}
							onClick={() => {
								checkCell(0)
							}}
						>
							Name {state === 0 ? reverseElements[0] : ' '}
						</th>
						<th
							className={state === 1 ? 'activated' : 'notActivated'}
							onClick={() => {
								checkCell(1)
							}}
						>
							People amount {state === 1 ? reverseElements[1] : ' '}
						</th>
						<th
							className={state === 2 ? 'activated' : 'notActivated'}
							onClick={() => {
								checkCell(2)
							}}
						>
							Price {state === 2 ? reverseElements[2] : ' '}
						</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{data.map(el => (
						<tr key={el.id}>
							<td className='align-top w-1/12'>{el.name}</td>
							<td className='align-top w-1/12'>{el.people}</td>
							<td className='align-top w-1/12'>{el.price}</td>
							<td>{el.description}</td>
						</tr>
					))}
				</tbody>
			</table>
			<form className={styles.mainForm}>
				<input className={styles.textBar} placeholder='Name'></input>
				<input className={styles.textBar} placeholder='People'></input>
				<input className={styles.textBar} placeholder='Price'></input>
				<textarea
					className={styles.textarea}
					placeholder='Description'
				></textarea>
			</form>
			<button className={styles.button}>Add new record</button>
		</div>
	)
}
