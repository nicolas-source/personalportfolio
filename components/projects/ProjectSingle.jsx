import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const imageStyle = {maxWidth: '100%', height: 'auto'};

const ProjectSingle = (props) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, delay: 1}}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}
        >
            <Link
                href="/projects/[id]"
                as={'/projects/' + props.shortName}
                aria-label="Single Project"
                passHref>


                <div
					// key={props.id}
                     className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                    <div className="flex-col">
                        <div className="">
                            <Image className="h-48 w-full object-cover hover:object-scale-down"
                                   src={props.image}
                                   width={500}
                                   height={500}
                                   alt="Project Image"/>
                        </div>
                        <div className="px-8 py-6">
                            {props.name}
                            <ul className="list-disc ml-5">
                                {
                                    props.description.map((item, index) => (
                                            <li
                                                // key={props.id}
                                                className="mt-1 text-slate-700">
                                                {item}
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                            {
                                props.tools.map((item, index) => (
                                        <span
                                            // key={props.id}
                                            className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                                text-sm uppercase font-semibold text-green-600
                                                                ring-1 ring-inset ring-green-500 ring-2">
                                                                {item}
                                                            </span>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>


            </Link>
        </motion.div>
    );
};

export default ProjectSingle;
