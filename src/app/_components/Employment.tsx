import Image from "next/image";
import Woolworths from "@/app/_assets/woolworths.webp"

export function Employment() {
    return (
        <section className="border-b py-20">
            <div className="container max-w-screen-lg mx-auto space-y-8">
                <h1 className="text-6xl font-black text-center underline decoration-dotted decoration-blue-500">Employment</h1>
                <article>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-4xl font-bold md:text-left text-center">Online Department, Woolworths</h2>
                        <Image src={Woolworths} alt="Woolworths Logo" className="w-48 right-0" />
                    </div>
                    <p className="text-xl font-semibold text-neutral-600 mb-4">Aug 2021 - Present (~3 Years)</p>
                    <ul className="list-disc list-inside">
                        <li>Team Supervisor</li>
                        <li>Assured accurate and timely picking, dispatching, and collection of online orders to maintain customer satisfaction.</li>
                        <li>Regularly conducted audits of picked orders to ensure accuracy and minimize discrepancies.</li>
                        <li>Effectively resolved customer inquiries and issues via the phoneline, ensuring a seamless customer experience.</li>
                        <li>Communicated proactively with customers about order statuses and any potential delays or issues.</li>
                        <li>Supervised the online order-picking team during evening shifts to uphold operational efficiency.</li>
                    </ul>
                </article>
            </div>
        </section>
    )
};