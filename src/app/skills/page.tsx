'use client'
import { useRouter } from 'next/navigation'
import Template from '../../../components/template/template'
import skills from './skills.json'
import styles from './skills.module.scss'
export default function page() {
	const router = useRouter()
	return (
		<div>
			<Template loading={false}>
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
								<td className='align-top'>{el.skill}</td>
								<td>{el.description}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Template>
		</div>
	)
}
