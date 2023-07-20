import Image from 'next/image';
import {FiClock, FiTag} from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import {projectsData} from '../../data/projectsData';

function ProjectSingle(props) {
    return (

        <div className="container mx-auto">

            <PagesMetaHead title={props.project.shortName}/>

            {/* Header */}
            <div>
                <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {props.project.name}
                </p>
                <div className="flex">
                    <div className="flex items-center mr-10">
                        <FiClock className="text-xl text-ternary-dark dark:text-ternary-light"/>
                        <span
                            className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.projectDate}
						</span>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                {props.project.projectImages.map((project) => {
                    return (
                        <div className="mb-10 sm:mb-0" key={project.id}>
                            <Image
                                src={project.img}
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={project.title}
                                key={project.id+10}
                                layout="responsive"
                                width={100}
                                height={90}
                            />
                        </div>
                    );
                })}
            </div>


            {/* Single project objectives */}
            <div className="mb-7">
                <p className="pt-8 font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                    Details
                </p>
                <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                    <ul className="list-disc ml-5">
                        {
                            props.project.description.map((item, index) => {
                                    return (
                                        <li key={item.id+100}
                                            className="mt-1 text-slate-700">
                                            {item.details}
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </p>
            </div>

            {/* Single project technologies */}
            <div className="mb-7">
                <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                    Tools & Technology
                </p>
                <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                    {props.project.tools.join(
                        ', '
                    )}
                </p>
            </div>
        </div>
    );
}

export async function getServerSideProps({query}) {
    const {id} = query;
    return {

        props: {
            project: projectsData.filter(
                (project) => project.shortName === id
            )[0],
        },
    };
}


export default ProjectSingle;
