import Link from 'next/link'
import Anim from '../../../components/animscroll/animation'
import Template from '../../../components/template/template'
import projects from './projects.json'
import styles from './projects.module.scss'
export default function page() {
	return (
		<div>
			<Template loading={false} left={true}>
				<table className={`${styles.table} text-sm md:text-lg`}>
					<thead className='text-base md:text-xl'>
						<tr>
							<th>Name (clicable)</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{projects.map(el => (
							<Anim tag='tr' key={el.id}>
								<td className='align-top  md:text-2xl text-xs'>
									<Link href={el.link} target={el.newPage ? '_blank' : ''}>
										{el.name}
									</Link>
								</td>
								<td>{el.description}</td>
							</Anim>
						))}
					</tbody>
				</table>
			</Template>
		</div>
	)
}
