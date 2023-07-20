import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
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
				passHref
			>

				{/*<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">*/}
				{/*	<div>*/}
				{/*		<Image*/}
				{/*			src={props.img}*/}
				{/*			className="rounded-t-xl border-none"*/}
				{/*			alt="Single Project"*/}
				{/*			layout="responsive"*/}
				{/*			width={100}*/}
				{/*			height={90}*/}
				{/*		/>*/}
				{/*	</div>*/}
				{/*	<div className="text-center px-4 py-6">*/}
				{/*		<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">*/}
				{/*			{props.title}*/}
				{/*		</p>*/}
				{/*		<span className="text-lg text-ternary-dark dark:text-ternary-light">*/}
				{/*			{props.category}*/}
				{/*		</span>*/}
				{/*	</div>*/}
				{/*</div>*/}

				<div key={props.id}
					 className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
					<div className="flex-col">
						<div className="">
							{/*<Image className="h-48 w-full object-cover object-scale-down hover:object-none"*/}
							<Image className="h-48 w-full object-cover hover:object-scale-down"
								   src={props.image}
								   width={500}
								   height={500}
								   alt="Project Image"/>
						</div>
						<div className="px-8 py-6">
							{/*<Link href={props.link}*/}
							{/*      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">*/}
							{props.name}
							{/*</Link>*/}
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
