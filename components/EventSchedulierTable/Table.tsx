import { useState } from 'react'
import styles from './table.module.scss'
export default function Table(props: any) {
	const [state, setState] = useState(0)
	const [reverseElements, setReverseElements] = useState(['↓', '↓', '↓', '↓'])

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
	)
}
