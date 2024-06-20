import Image from "next/image";
import { Discord, GitHub, LinkedIn } from "./_components/Icons";
import { Education } from "./_components/Education";
import { Projects } from "./_components/Projects";
import { Employment } from "./_components/Employment";
import { Experience } from "./_components/Experience";
import Me from "@/assets/me.png";

export default function Home() {
  return (
    <>
      <section className="border-b bg-neutral-100 py-20">
        <div className="container mx-auto max-w-screen-lg space-y-12">
          <div className="mb-4 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="space-y-2">
              <h1 className="text-6xl font-black">zeke pari</h1>
              <h2 className="border-b-8 border-dotted border-blue-500 text-lg font-semibold">
                Full Stack Developer
              </h2>
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.linkedin.com/in/ezekiel-pari-96a458258/"
                  target="_blank"
                >
                  <LinkedIn className="duration-300 hover:stroke-blue-500 hover:transition" />
                </a>
                <a href="https://github.com/zekepari" target="_blank">
                  <GitHub className="duration-300 hover:stroke-blue-500 hover:transition" />
                </a>
                <Discord />
                <span className="text-lg font-semibold text-neutral-800">
                  @zekek_
                </span>
              </div>
            </div>
            <Image
              src={Me}
              alt="Picture of me"
              width={250}
              height={250}
              className="rounded-full border-b-8 border-blue-500"
              quality={100}
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://skillicons.dev/icons?i=html,css,js,ts,lua,java,python,react,next,mongo,postgresql,vercel,tailwind,prisma&perline=7"
              alt="Skill icons"
              className="w-full sm:hidden"
            />
            <img
              src="https://skillicons.dev/icons?i=html,css,js,ts,lua,java,python,react,next,mongo,postgresql,vercel,tailwind,prisma"
              alt="Skill icons"
              className="hidden w-full sm:block"
            />
          </div>
        </div>
      </section>
      <Education />
      <Projects />
      <Employment />
      <Experience />
      <section className="container mx-auto max-w-screen-lg py-20 text-center">
        <h1 className="text-4xl font-black">That&apos;s all!</h1>
        <p className="text-xl font-semibold text-neutral-600">
          Thanks for reading.
        </p>
      </section>
    </>
  );
}
