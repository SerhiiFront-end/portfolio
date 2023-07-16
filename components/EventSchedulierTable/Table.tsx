import { useState } from 'react'
import EventType from '../../types/eventTable.types'
import styles from './table.module.scss'
export default function Table({
	data,
	setData,
}: {
	data: EventType[]
	setData: React.Dispatch<React.SetStateAction<EventType[]>>
}) {
	const [state, setState] = useState(7)
	const [reverseElements, setReverseElements] = useState(['↓', '↓', '↓', '↓'])
	const checkCell = (states: number) => {
		if (states !== state) {
			setState(states)
			const updatedArray = [...reverseElements]
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
					<th style={{ cursor: 'auto' }}>Description</th>
				</tr>
			</thead>
			<tbody>
				{data.map((el, index) => (
					<tr key={el.id}>
						<td className='align-top w-1/12'>{el.name}</td>
						<td className='align-top w-1/12'>{el.people}</td>
						<td className='align-top w-1/12'>{el.price}</td>
						<td>{el.description}</td>
						<td
							className='hover:ease-linear hover:duration-500 hover:bg-slate-500'
							onClick={() => {
								const newArray = [...data]
								newArray.splice(index, 1)
								setData(newArray)
							}}
						>
							Delete
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
