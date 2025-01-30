import CollapsibleVideo from "@/components/CollapsibleVideo";
import {
  Blocks,
  CircleAlert,
  CornerRightDown,
  ExternalLink,
  Flag,
  Globe,
  Hospital,
  Mail,
  Radio,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div className="flex items-center">
          <div className="w-full mr-2">
            <h1>Ezekiel (Zeke) Pari</h1>
            <p className="md:text-lg opacity-75">Full Stack Developer</p>
            <hr className="-mr-2 mb-2" />
            <div className="flex gap-2 flex-wrap items-center">
              <Link
                href="https://www.linkedin.com/in/ezekiel-pari-96a458258/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                <Image
                  src="/assets/LinkedIn.svg"
                  height={30}
                  width={30}
                  alt="LinkedIn Logo"
                />
              </Link>
              <Link
                href="https://github.com/zekepari"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                <Image
                  src="/assets/GitHub.svg"
                  height={30}
                  width={30}
                  alt="LinkedIn Logo"
                />
              </Link>
              <Link
                href="mailto:me@zekepari.dev"
                className="hover:text-blue-600 transition"
              >
                <Mail className="size-4 inline-block mr-1" />
                <span>me@zekepari.dev</span>
              </Link>
            </div>
          </div>

          <Image
            src="/Zekes.png"
            alt="Picture of me"
            width={200}
            height={200}
            className="aspect-square object-cover border p-2"
            sizes="(min-width: 768px) 200px, 150px"
          />
        </div>

        <p>
          My Tech Stack <CornerRightDown className="size-4 inline-block" />
        </p>

        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://skillicons.dev/icons?i=html,css,js,ts,lua,java,python,react,next,mongo,postgresql,vercel,tailwind,prisma&perline=7"
            alt="Skill icons"
            height={100}
            width={1000}
            className="w-full sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://skillicons.dev/icons?i=html,css,js,ts,lua,java,python,react,next,mongo,postgresql,vercel,tailwind,prisma"
            alt="Skill icons"
            height={100}
            width={1000}
            className="hidden w-full sm:block"
          />
        </div>
      </section>
      <hr />
      <section className="space-y-4">
        <h2>Education</h2>
        <p>
          <CircleAlert className="size-4 inline-block" /> We&apos;re keeping it
          simple! •{" "}
          <Link
            href="https://www.aqf.edu.au/framework/aqf-qualifications"
            className="text-blue-500 hover:text-blue-400"
            target="_blank"
          >
            Australian Qualifications Framework{" "}
            <ExternalLink className="inline-block size-4" />
          </Link>
        </p>
        <div>
          <h3>Bachelor of Computer Science</h3>
          <p className="opacity-75">
            Minor in Cloud Computing • Graduating 2026
          </p>
        </div>
        <div>
          <h3>Certificate in Front-End Development</h3>
          <Link
            href="https://www.coursera.org/account/accomplishments/professional-cert/K329R2NDRAS9"
            className="text-blue-500 hover:text-blue-400"
            target="_blank"
          >
            Digital Certificate <ExternalLink className="inline-block size-4" />
          </Link>
        </div>
        <div>
          <h3>IT Specialist - Python</h3>
          <Link
            href="https://www.credly.com/badges/4c90f5d6-40e9-4263-a534-d141cba93c69/linked_in?t=sdxccf"
            className="text-blue-500 hover:text-blue-400"
            target="_blank"
          >
            Digital Certificate <ExternalLink className="inline-block size-4" />
          </Link>
        </div>
      </section>
      <hr />
      <section className="space-y-4">
        <h2>Projects</h2>
        <div className="space-y-2">
          <h3>
            RoGold <Blocks className="inline-block text-amber-500" />
          </h3>
          <p className="opacity-75">
            Official website for the RoGold extension. Built with Next.js, the
            site features a sleek and intuitive interface that provides seamless
            access to extension features, support, and updates. Key
            implementations include multilingual support, interactive demos, and
            integration with backend services using Chargebee for subscription
            management. Enhanced user experience through responsive design,
            cross-browser optimization, and performance improvements such as
            file and image optimization. Utilized Docker for streamlined
            deployment and integrated robust logging with Winston for effective
            monitoring.
          </p>
          <p>
            <Link
              href="https://rogold.live"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
            >
              Visit Website <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3>
            WorldMC <Globe className="inline-block text-blue-500" />
          </h3>
          <p className="opacity-75">
            A massive multiplayer online experience centered around a map of the
            Earth. This website, as well as the backend API which drives it,
            showcases in-game markets, players, towns, and nations.
          </p>
          <CollapsibleVideo src="/videos/worldmc.webm" title="WorldMC Demo" />
          <p>
            <Link
              href="https://worldmc.net"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
            >
              Visit Website <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3>
            Shockwaves Radio <Radio className="inline-block text-indigo-500" />
          </h3>
          <p className="opacity-75">
            A radio website featuring live music streaming, staff management,
            and partnerships with games like Farming Simulator and Euro Truck
            Simulator. The platform allows staff to manage playlists, schedules,
            and roles through a dedicated dashboard.
          </p>
          <CollapsibleVideo
            src="/videos/shockwaves.webm"
            title="Shockwaves Radio Demo"
          />
          <p>
            <Link
              href="https://shockwavesradio.com"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
            >
              Visit Website <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3>
            RoLinker <Wrench className="inline-block text-red-500" />
          </h3>
          <p className="opacity-75">
            Link Roblox and Discord accounts together by connecting both of them
            to RoLinker. Access a discord bot which enables commands for Roblox
            groups, and an optional Roblox bot account to facilitate group
            management from Discord.
          </p>
          <CollapsibleVideo src="/videos/rolinker.webm" title="RoLinker Demo" />
          <p>
            <Link
              href="https://rolinker.net"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
            >
              Visit Website <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3>
            CarePulse <Hospital className="inline-block text-purple-500" />
          </h3>
          <p className="opacity-75">
            A patient management system with a patient-centric design. CarePulse
            features an admin dashboard for appointment management, a safe
            sign-on process for new patients, OTP, and SMS appointment
            verification/confirmation.
          </p>
          <CollapsibleVideo
            src="/videos/carepulse.webm"
            title="CarePulse Demo"
          />
        </div>
        <div className="space-y-2">
          <h3>
            Arstotzka <Flag className="inline-block text-green-700" />
          </h3>
          <p className="opacity-75">
            Showcasing various custom features such as user interface,
            marketplace, weapons, economy, NPCs, character customization, and
            crime. The UI design captures the 1980s aesthetic, following the
            theme of Arstotzka.
          </p>
          <CollapsibleVideo
            src="/videos/arstotzka.webm"
            title="Arstotzka Demo"
          />
        </div>
      </section>
      <section className="text-center">
        <h4>That&apos;s all!</h4>
        <p className="opacity-75">Thanks for reading.</p>
        <Link
          href="mailto:me@zekepari.dev"
          className="hover:text-blue-600 transition-colors"
        >
          <Mail className="size-4 inline-block mr-1" />
          <span>me@zekepari.dev</span>
        </Link>
      </section>
    </div>
  );
}
