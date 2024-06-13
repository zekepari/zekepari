import Image from "next/image";
import UniSC from "@/app/_assets/unisc.svg"
import MetaLogo from "@/app/_assets/Meta-Logo.png"
import QldGovt from "@/app/_assets/QldGovt.svg"
import Certiport from "@/app/_assets/certiport.png"

export function Education() {
    return (
        <section className="border-b py-20">
            <div className="container max-w-screen-lg mx-auto space-y-8">
                <h1 className="text-6xl font-black text-center underline decoration-double decoration-blue-500">Education</h1>
                <p><a href="https://www.aqf.edu.au/framework/aqf-qualifications" target="_blank" className="text-blue-500 hover:text-blue-400">Australian Qualifications Framework ↗</a></p>
                <article>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-4xl font-bold md:text-left text-center">Bachelor of Computer Science</h2>
                        <Image src={UniSC} alt="UniSC Logo" className="w-48 right-0" />
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Minor in Cloud Computing</li>
                        <li>Graduating 2026</li>
                    </ul>
                </article>
                <article>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-4xl font-bold md:text-left text-center">Certificate III in ICT</h2>
                        <Image src={QldGovt} alt="Queensland Government Logo" className="w-48 right-0" />
                    </div>
                </article>
                <article>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-4xl font-bold md:text-left text-center">Certificate III in Business</h2>
                        <Image src={QldGovt} alt="Queensland Government Logo" className="w-48 right-0" />
                    </div>
                </article>
                <article>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-4xl font-bold md:text-left text-center">Meta Certificate in Front-End Development</h2>
                        <Image src={MetaLogo} alt="Meta Logo" className="w-48 right-0" />
                    </div>
                    <ul className="list-disc list-inside">
                        <li><a href="https://www.coursera.org/account/accomplishments/professional-cert/K329R2NDRAS9" target="_blank" className="text-blue-500 hover:text-blue-400">Digital Certificate ↗</a></li>
                    </ul>
                </article>
                <article>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-4xl font-bold md:text-left text-center">Certiport IT Specialist - Python</h2>
                        <Image src={Certiport} alt="Certiport Logo" className="w-48 right-0" />
                    </div>
                    <ul className="list-disc list-inside">
                        <li><a href="https://www.credly.com/badges/4c90f5d6-40e9-4263-a534-d141cba93c69/linked_in?t=sdxccf" target="_blank" className="text-blue-500 hover:text-blue-400">Digital Certificate ↗</a></li>
                    </ul>
                </article>
            </div>
        </section>
    )
};