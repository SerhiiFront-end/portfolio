import Project from '@/components/project/Project'
import Template from '@/components/template/template'
import projects from './projects.json'
export default function page() {
	return (
		<Template left={true}>
			{projects.map((el, index) => (
				<Project
					key={index}
					link={el.link}
					index={index}
					img={el.image}
					name={el.name}
					description={el.description}
					newPage={el.newPage}
				/>
			))}
		</Template>
	)
}
