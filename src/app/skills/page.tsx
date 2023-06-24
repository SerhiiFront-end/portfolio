'use client'
import { useRouter } from 'next/navigation'

import skills from './skills.json'
import styles from './skills.module.scss'
export default function page() {
	const router = useRouter()
	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Skill / Knowledge </th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{skills.map(el => (
						<tr key={el.id}>
							<td>{el.skill}</td>
							<td>{el.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
