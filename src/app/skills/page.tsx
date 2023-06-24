import styles from './skills.module.scss'
export default function page() {
	return (
		<div>
			<table className={styles.table}>
				<tr>
					<th>Skill / Knowledge </th>
					<th>Description</th>
				</tr>
				<tr>
					<td>данные</td>
					<td>данные</td>
				</tr>
				{/* {skills.map(el => (
				el.skill))} */}
			</table>
		</div>
	)
}
