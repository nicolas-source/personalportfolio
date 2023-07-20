import Image from 'next/image'

import FeatImage01 from '/public/images/UBC.jpg'

export default function EducationList() {
    return (
        <section>
            <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="py-6 border-t border-slate-400"></div>
                    <div id="Education" data-aos="fade-up" className="mx-auto max-w-2xl text-center">
                        <p className="mt-2 text-3xl font-semibold sm:text-4xl">Education</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl  lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                            <div data-aos="fade-up" className="relative pl-28">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div>
                                        <Image
                                            className="absolute left-0 top-0 flex h-24 w-24 items-center justify-centerbg-indigo-600"
                                            src={FeatImage01} width={80}
                                            height={80} alt="Features 01"/>
                                    </div>
                                    <p className="font-semibold text-lg">University of British Columbia</p>
                                    <p className="font-normal leading-4">Bachelors of Applied Science (BASc), Computer
                                        Engineering</p>
                                    <p className="font-normal leading-7 text-neutral-500">Graduated with Distinction</p>
                                    <p className="font-normal leading-4 text-neutral-500">Sep 2019 - May 2023</p>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-slate-800">
                                    {/*<p className="font-semibold">Major Project: Machine Learning for Protein Prediction</p>*/}
                                    {/*<p className="font-normal leading-5 text-neutral-500">Sep 2022 - Apr 2023</p>*/}
                                    {/*<ul className="ml-5 list-disc">*/}
                                    {/*    <li className="font-normal leading-6">Engineered statistical models to make*/}
                                    {/*        predictions on protein sequences <span className="text-sky-950 font-semibold">(Python)</span>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="font-normal leading-6">Developed knowledge in deep learning to*/}
                                    {/*        debug issues on models*/}
                                    {/*    </li>*/}
                                    {/*    <li className="font-normal leading-6">Implemented models using industry*/}
                                    {/*        frameworks <span className="text-sky-950 font-semibold">(Pytorch, Tensorflow)</span>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="font-normal leading-6">Used JIRA and followed AGILE development*/}
                                    {/*        methodology*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}
                                    <p className="mt-1.5 font-semibold">Major coursework</p>
                                    <ul className="ml-5 list-disc">
                                        <li className="font-normal leading-6">Won cybersecurity mining contest (1st of
                                            50)
                                            using GPU programming <span className="text-sky-950 font-semibold">(C++, Cuda)</span>
                                        </li>
                                        <li className="font-normal leading-6">Constructed Turing Complete CPU on FPGA
                                            board <span className="text-sky-950 font-semibold">(Verilog)</span>
                                        </li>
                                        <li className="font-normal leading-6">Implemented forward and backward operators
                                            for
                                            convolution and batch norm <span className="text-sky-950 font-semibold">(Pytorch)</span>
                                        </li>
                                        <li className="font-normal leading-6">Set up Frontend (NextJs, React) and Backend web (NodeJs Server, MongoDB, MySQL)<span className="text-sky-950 font-semibold">(Javascript, NodeJs, SQL, React, NextJs)</span>
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
