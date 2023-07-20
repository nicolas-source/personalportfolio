import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Hero from '/components/Hero'
import ExperienceList from "/components/ExperienceList";
import EducationList from "/components/EducationList";
export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Nicolas" />

			<Hero/>
			<ProjectsGrid/>
			<EducationList/>
			<ExperienceList/>

		</div>
	);
}
