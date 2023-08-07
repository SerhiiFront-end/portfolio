import Anim from '@/components/animscroll/Anim'
import Template from '@/components/template/template'
import skills from './skills.json'
import styles from './skills.module.scss'
export default function page() {
	return (
		<Template>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Skill / Knowledge </th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{skills.map(el => (
						<Anim key={el.id} tag='tr'>
							<td className='align-top'>{el.skill}</td>
							<td>{el.description}</td>
						</Anim>
					))}
				</tbody>
			</table>
		</Template>
	)
}
