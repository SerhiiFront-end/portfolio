import Link from 'next/link'
import projects from './projects.json'
import styles from './projects.module.scss'
export default function page() {
	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{projects.map(el => (
						<tr key={el.id}>
							<td className='align-top'>
								<Link href={'/projects/EventScheduler'}>{el.name}</Link>
							</td>
							<td>{el.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
