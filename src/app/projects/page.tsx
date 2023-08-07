import Anim from '@/components/animscroll/Anim'
import Template from '@/components/template/template'
import Link from 'next/link'
import projects from './projects.json'
import styles from './projects.module.scss'
export default function page() {
	return (
		<Template left={true}>
			<table className={`${styles.table} text-sm md:text-lg`}>
				<thead className='text-base md:text-xl'>
					<tr>
						<th>Name (clicable)</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{projects.map(el => (
						<Anim tag='tr'>
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
	)
}
