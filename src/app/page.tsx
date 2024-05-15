import Image from "next/image";
import { Discord, GitHub, LinkedIn } from "./_components/Icons";

export default function Home() {
  return (
    <>
      <section className="bg-neutral-100 border-b py-20">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h1 className="text-6xl font-black">Zeke Pari</h1>
              <h2 className="text-lg font-semibold italic border-b-8 border-dotted border-blue-500 mb-4">Wannabe Full-Stack Developer!</h2>
              <div className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/in/ezekiel-pari-96a458258/" target="_blank"><LinkedIn className="hover:transition hover:stroke-blue-500 duration-300" /></a>
                <a href="https://github.com/zekepari" target="_blank"><GitHub className="hover:transition hover:stroke-blue-500 duration-300" /></a>
                <Discord /><span className="text-lg font-semibold text-neutral-800">@zekek_</span>
              </div>
            </div>
            <Image src='/me.png' alt="Picture of me" className="rounded-full border-b-8 border-blue-500 mb-4" width={250} height={250} quality={100} />
          </div>
          <div className="flex justify-center">
            <img src="https://skillicons.dev/icons?i=html,css,js,ts,lua,java,python,react,next,mongo,postgresql,vercel,tailwind,prisma&perline=7" alt="Skill icons" className="w-full sm:hidden" />
            <img src="https://skillicons.dev/icons?i=html,css,js,ts,lua,java,python,react,next,mongo,postgresql,vercel,tailwind,prisma" alt="Skill icons" className="w-full hidden sm:block" />
          </div>
        </div>
      </section>
      <section className="border-b py-20">
        <div className="container max-w-screen-lg mx-auto space-y-16">
          <h1 className="text-6xl font-black text-center underline decoration-double decoration-blue-500">Education</h1>
          <p><a href="https://www.aqf.edu.au/framework/aqf-qualifications" target="_blank" className="text-blue-500 hover:text-blue-400">Australian Qualifications Framework ↗</a></p>
          <article>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-4xl font-bold">Bachelor of Computer Science</h2>
              <Image src='/unisc.svg' alt="UniSC Logo" width={200} height={100} />
            </div>
            <ul className="list-disc list-inside">
              <li>Minor in Cloud Computing</li>
              <li>Graduating 2026</li>
            </ul>
          </article>
          <article>
            <div className="flex justify-between ">
              <h2 className="text-4xl font-bold ">Certificate III in ICT</h2>
              <h2 className="text-4xl font-bold mb-4">VETiS</h2>
            </div>
            <ul className="list-disc list-inside">
              <li>Completed 2023</li>
            </ul>
          </article>
          <article>
            <div className="flex justify-between ">
              <h2 className="text-4xl font-bold ">Certificate III in Business</h2>
              <h2 className="text-4xl font-bold mb-4">VETiS</h2>
            </div>
            <ul className="list-disc list-inside">
              <li>Completed 2023</li>
            </ul>
          </article>
          <article>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-4xl font-bold ">Meta Certificate in Front-End Development</h2>
              <Image src='/Meta-Logo.png' alt="Meta Logo" width={200} height={100} />
            </div>
            <ul className="list-disc list-inside">
              <li><a href="https://www.coursera.org/account/accomplishments/professional-cert/K329R2NDRAS9" target="_blank" className="text-blue-500 hover:text-blue-400">Digital Certificate ↗</a></li>
              <li>Completed 2023</li>
            </ul>
          </article>
          <article>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-4xl font-bold ">Certificate III in Aviation</h2>
              <Image src='/basair-logo-v2.png' alt="Basair College Logo" width={200} height={200} className="bg-blue-900 rounded px-4 py-2" />
            </div>
            <ul className="list-disc list-inside">
              <li>Remote Pilot Specification</li>
              <li>Completed 2022</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="bg-neutral-100 border-b py-20">
        <div className="container max-w-screen-lg mx-auto space-y-20">
          <h1 className="text-6xl font-black text-center underline decoration-wavy decoration-blue-500">Projects</h1>
          <article className="space-y-4">
            <div>
              <div className="flex justify-between mb-4">
                <h2 className="text-4xl font-bold">RoLinker 🔧</h2>
                <h3 className="text-3xl font-semibold text-neutral-600">Software Service</h3>
              </div>
              <p>Link Roblox and Discord accounts together by connecting both of them to RoLinker. Access a discord bot which enables commands for Roblox groups, and an optional Roblox bot account to facilitate group management from Discord.</p>
            </div>
            <video className="w-full h-auto max-w-full" controls>
              <source src="/rolinker.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </article>
          <article className="space-y-4">
            <div>
              <div className="flex justify-between mb-4">
                <h2 className="text-4xl font-bold">Arstotzka 🪖</h2>
                <h3 className="text-3xl font-semibold text-neutral-600">Roblox Game</h3>
              </div>
              <p>Showcasing various custom features such as user interface, marketplace, weapons, economy, NPCs, character customization, and crime.</p>
            </div>
            <video className="w-full h-auto max-w-full" controls>
              <source src="/arstotzka.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </article>
        </div>
      </section>
      <section className="border-b py-20">
        <div className="container max-w-screen-lg mx-auto space-y-16">
          <h1 className="text-6xl font-black text-center underline decoration-dotted decoration-blue-500">Employment</h1>
          <article>
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold">Online Department, Woolworths</h2>
              <Image src='/woolworths.webp' alt="Woolworths Logo" width={250} height={50} />
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
      <section className="bg-neutral-100 border-b py-20">
        <div className="container max-w-screen-lg mx-auto space-y-16">
          <h1 className="text-6xl font-black text-center underline decoration-blue-500">Experience</h1>
          <article>
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold">Health Information, Metro North</h2>
              <Image src='/metroNorth.png' alt="Woolworths Logo" width={250} height={50} />
            </div>
            <p className="text-xl font-semibold text-neutral-600 mb-4">Oct - Nov 2023</p>
            <ul className="list-disc list-inside">
              <li>Managed and navigated the Hibiscus system, ensuring accurate data entry and retrieval of patient information.</li>
              <li>Handled the dispatch, collection, and meticulous organisation of medical records to facilitate easy retrieval and maintain data integrity.</li>
              <li>Collaborated with various departments to ensure that medical records were accurately and promptly dispatched and received, maintaining a smooth flow of information.</li>
              <li>Vigilantly maintained strict confidentiality and security of patient information, adhering to all relevant data protection regulations and hospital policies.</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="py-20 container max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-black">That&apos;s all!</h1>
        <p className="text-xl font-semibold text-neutral-600">Thanks for reading.</p>
      </section>
    </>
  );
}
