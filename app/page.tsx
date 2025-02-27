import CollapsibleVideo from "@/components/CollapsibleVideo";
import {
  Blocks,
  CircleAlert,
  CornerRightDown,
  ExternalLink,
  Flag,
  Github,
  Globe,
  Hospital,
  Linkedin,
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
            <h1 className="sm:hidden">Zeke Pari</h1>
            <h1 className="max-sm:hidden">Ezekiel (Zeke) Pari</h1>
            <p className="md:text-lg">Full Stack Developer</p>
            <hr className="-mr-2 mb-2" />
            <div className="flex gap-2 flex-wrap items-center">
              <Link
                href="https://www.linkedin.com/in/ezekiel-pari-96a458258/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                <Linkedin height={30} width={30} />
              </Link>
              <Link
                href="https://github.com/zekepari"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                <Github height={30} width={30} />
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
            src="/me.jpg"
            alt="Picture of me"
            width={200}
            height={200}
            className="border p-2"
            sizes="(min-width: 768px) 200px, 150px"
          />
        </div>

        <p>
          My Technologies <CornerRightDown className="size-4 inline-block" />
        </p>

        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://skillicons.dev/icons?i=html,css,js,ts,java,python,lua,solidjs,react,next,mongo,postgresql,kubernetes,docker&perline=7"
            alt="Skill icons"
            height={100}
            width={1000}
            className="w-full sm:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://skillicons.dev/icons?i=html,css,js,ts,java,python,lua,solidjs,react,next,mongo,postgresql,kubernetes,docker"
            alt="Skill icons"
            height={100}
            width={1000}
            className="w-full max-sm:hidden"
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
          <p>
            <span className="font-bold">6.75 GPA</span> • Minor in Cloud
            Computing • Graduating 2026
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
            RoGold <Blocks className="inline-block text-amber-500" />{" "}
            <span className="font-bold text-base text-red-400">
              700k+ users
            </span>
          </h3>
          <p>
            Official website for the RoGold extension. This website is packed
            with features like multilingual support, interactive demos, and
            integration with backend services like Chargebee for subscription
            management or the native RoGold API for account management. Fully
            responsive design and cross-browser optimized. Implemented Docker
            and GitHub actions for streamlined deployment, and robust logging
            with Winston.
          </p>
          <CollapsibleVideo src="/videos/rogold.webm" title="RoGold Demo" />
          <p>
            Worked on the RoGold extension itself, implementing upgrades such as
            componentizing content, optimizing performance, and developing new
            features—such as bulk unfollowing users—alongside various other
            improvements.
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
          <p>
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
          <p>
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
          <p>
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
          <p>
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
          <p>
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
        <p>Thanks for reading.</p>
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
