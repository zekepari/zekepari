import CollapsibleVideo from "@/components/CollapsibleVideo";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircleAlert, CornerRightDown, ExternalLink, Flag, Globe, Hospital, ShieldAlert, TriangleAlert, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div className="flex justify-around items-center">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-black">Ezekiel (Zeke) Pari</h1>
            <p className="md:text-lg opacity-75">Full Stack Developer</p>
            <hr/>
            <div className="flex gap-2 mt-2">
              <Link href="https://www.linkedin.com/in/ezekiel-pari-96a458258/" target="_blank" className="hover:text-blue-600 transition">
                <FontAwesomeIcon icon={faLinkedin} className="size-8" />
              </Link>
              <Link href="https://github.com/zekepari" target="_blank" className="hover:text-blue-600 transition">
                <FontAwesomeIcon icon={faGithub} className="size-8" />
              </Link>
            </div>
          </div>
          
          <Image 
            src="/Zekes.jpg"
            width={200}
            height={200}
            alt="Picture of me"
            className="aspect-square object-cover border p-2 hidden md:block"
          />
          <Image 
            src="/Zekes.jpg"
            width={150}
            height={150}
            alt="Picture of me"
            className="aspect-square object-cover border p-2 md:hidden"
          />
        </div>

        <p>My Tech Stack <CornerRightDown className="size-4 inline-block" /></p>
        
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
      </section>
      <hr/>
      <section className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        <p><CircleAlert className="size-4 inline-block" /> We&apos;re keeping it simple! • <Link href="https://www.aqf.edu.au/framework/aqf-qualifications" className="text-blue-500 hover:text-blue-400" target="_blank">Australian Qualifications Framework <ExternalLink className="inline-block size-4"/></Link></p>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Bachelor of Computer Science</h3>
          <p className="opacity-75">Minor in Cloud Computing • Graduating 2026</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Certificate in Front-End Development</h3>
          <Link href="https://www.coursera.org/account/accomplishments/professional-cert/K329R2NDRAS9" className="text-blue-500 hover:text-blue-400" target="_blank">Digital Certificate <ExternalLink className="inline-block size-4"/></Link>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">IT Specialist - Python</h3>
          <Link href="https://www.credly.com/badges/4c90f5d6-40e9-4263-a534-d141cba93c69/linked_in?t=sdxccf" className="text-blue-500 hover:text-blue-400" target="_blank">Digital Certificate <ExternalLink className="inline-block size-4"/></Link>
        </div>
      </section>
      <hr/>
      <section className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-semibold">WorldMC <Globe className="inline-block text-blue-500"/></h3>
          <p className="opacity-75">A massive multiplayer online experience centered around a map of the Earth. This website, as well as the backend API which drives it, showcases in-game markets, players, towns, and nations.</p>
          <CollapsibleVideo src="/worldmc.webm" title="WorldMC Demo" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-semibold">CarePulse <Hospital className="inline-block text-purple-500"/></h3>
          <p className="opacity-75">A patient management system with a patient-centric design. CarePulse features an admin dashboard for appointment management, a safe sign-on process for new patients, OTP, and SMS appointment verification/confirmation.</p>
          <CollapsibleVideo src="/carepulse.webm" title="CarePulse Demo" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-semibold">RoLinker <Wrench className="inline-block text-red-500"/></h3>
          <p className="opacity-75">Link Roblox and Discord accounts together by connecting both of them to RoLinker. Access a discord bot which enables commands for Roblox groups, and an optional Roblox bot account to facilitate group management from Discord.</p>
          <CollapsibleVideo src="/rolinker.webm" title="RoLinker Demo" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-semibold">Arstotzka <Flag className="inline-block text-green-700"/></h3>
          <p className="opacity-75">Showcasing various custom features such as user interface, marketplace, weapons, economy, NPCs, character customization, and crime. The UI design captures the 1980s aesthetic, following the theme of Arstotzka.</p>
          <CollapsibleVideo src="/arstotzka.webm" title="Arstotzka Demo" />
        </div>
      </section>
      <section className="text-center">
      <h3 className="text-xl font-black">That&apos;s all!</h3>
        <p className="opacity-75">Thanks for reading.</p>
      </section>
    </div>
  );
}
