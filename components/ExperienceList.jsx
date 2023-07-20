import Image from 'next/image'

import FeatImage01 from '/public/images/Canada.png'
import FeatImage02 from '/public/images/Sauder.png'
import FeatImage03 from '/public/images/UBCDC.png'

export default function ExperienceList() {
    return (
        <section>
            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="py-6 border-t border-gray-400"></div>
                    <div id="Experience" data-aos="fade-up" className="mx-auto max-w-2xl text-center">
                        <p className="mt-2 text-3xl font-semibold sm:text-4xl">Experience &
                            Volunteering</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl  lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                            <div data-aos="fade-up" className="relative pl-28">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div>
                                        <Image
                                            className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-lg bg-indigo-600"
                                            src={FeatImage02} width={80}
                                            height={80} alt="Features 01"/>
                                    </div>
                                    <p className="font-semibold text-lg">Student Assistant </p>
                                    <p className="font-normal leading-4">UBC Sauder Learning Labs</p>
                                    <p className="font-normal leading-7 text-neutral-500">Oct 2020 - May 2023</p>
                                    <p className="font-normal leading-4 text-neutral-500">Education</p>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-slate-800">
                                    <ul className="list-disc ml-5">
                                        <li className="font-normal leading-6">Programmed scripts in Python to automate
                                            repetitive tasks to reduce time spent on manual procedures when organizing
                                            video databases to increase accessibility
                                        </li>
                                        <li className="font-normal leading-6">Implemented functions using REST API
                                            documentation for Panopto to implement python scripts
                                        </li>
                                        <li className="font-normal leading-6">
                                            Implemented task automation to streamline the process of organizing video
                                            databases (Python)

                                        </li>
                                    </ul>
                                </dd>
                            </div>
                            <div data-aos="fade-up" className="relative pl-28">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div>
                                        <Image
                                            className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center bg-indigo-600"
                                            src={FeatImage03} width={80}
                                            height={80} alt="Features 01"/>
                                    </div>
                                    <p className="font-semibold text-lg">IT Manager, Treasurer </p>
                                    <p className="font-normal leading-4">UBC Dance Club</p>
                                    <p className="font-normal leading-7 text-neutral-500">May 2020 - May 2023</p>
                                    <p className="font-normal leading-4 text-neutral-500">Community Arts and Culture</p>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-slate-800">
                                    <ul className="list-disc ml-5">
                                        <li className="font-normal leading-6">
                                            Balanced budget of $30,000+ to achieve positive revenue to bring five
                                            affordable dance classes for 100+ students
                                        </li>
                                        <li className="font-normal leading-6">
                                            Redesigned website for responsiveness and mobile use to increase web traffic over 5 times<span
                                            className="text-sky-950 font-semibold">(HTML, CSS, Javascript, Bootstrap)</span>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                            <div data-aos="fade-up" className="relative pl-28">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div>
                                        <Image
                                            className="absolute left-0 top-0 flex h-24 w-24 items-center justify-centerbg-indigo-600"
                                            src={FeatImage01} width={80}
                                            height={80} alt="Features 01"/>
                                    </div>
                                    <p className="font-semibold text-lg">Mobile Support Equipment Op</p>
                                    <p className="font-normal leading-4">Department of National Defense</p>
                                    <p className="font-normal leading-7 text-neutral-500">Aug 2018 - Present</p>
                                    <p className="font-normal leading-4 text-neutral-500">Disaster and Humanitarian
                                        Relief</p>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-slate-800">
                                    <ul className="list-disc ml-5">
                                        <li className="font-normal leading-6">
                                            Liaised with 7 other units in BC to ensure vehicle availability for domestic
                                            deployment (summer)
                                        </li>
                                        <li className="font-normal leading-6">
                                            Developed exceptional accuracy and attention to detail to ensure safety
                                            protocols are followed
                                        </li>
                                        <li className="font-normal leading-6">
                                            Followed instructions closely on complex procedures to ensure positive
                                            outcomes
                                        </li>
                                        <li className="font-normal leading-6">
                                            Maintained a calm demeanour in high-stakes situations to ensure tasks are
                                            completed correctly
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}
