import Image from "next/image";
import { Discord, GitHub, LinkedIn } from "./_components/Icons";
import { Education } from "./_components/Education";
import { Projects } from "./_components/Projects";
import { Employment } from "./_components/Employment";
import { Experience } from "./_components/Experience";

export default function Home() {
  return (
    <>
      <section className="bg-neutral-100 border-b py-20">
        <div className="container max-w-screen-lg mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6">
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
      <Education />
      <Projects />
      <Employment />
      <Experience />
      <section className="py-20 container max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-black">That&apos;s all!</h1>
        <p className="text-xl font-semibold text-neutral-600">Thanks for reading.</p>
      </section>
    </>
  );
}
