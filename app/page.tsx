import CollapsibleVideo from "@/components/CollapsibleVideo";
import {
  CircleAlert,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://zekepari.dev/#zeke-pari",
      name: "Ezekiel Pari",
      alternateName: ["Zeke Pari", "Ezekiel (Zeke) Pari"],
      url: "https://zekepari.dev/",
      jobTitle: "Co-founder (Product & Systems) at MESR",
      sameAs: [
        "https://www.linkedin.com/in/ezekiel-pari-96a458258/",
        "https://github.com/zekepari",
      ],
      worksFor: {
        "@type": "Organization",
        "@id": "https://mesr.ai/#organization",
        name: "MESR",
        url: "https://mesr.ai/",
      },
      homeLocation: {
        "@type": "Place",
        name: "Brisbane, Queensland, Australia",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://zekepari.dev/#website",
      url: "https://zekepari.dev/",
      name: "Ezekiel Pari",
      inLanguage: "en-AU",
      publisher: { "@id": "https://zekepari.dev/#zeke-pari" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://zekepari.dev/#profile",
      url: "https://zekepari.dev/",
      name: "Ezekiel (Zeke) Pari",
      isPartOf: { "@id": "https://zekepari.dev/#website" },
      mainEntity: { "@id": "https://zekepari.dev/#zeke-pari" },
      inLanguage: "en-AU",
    },
  ],
};

function BrandMark({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={32}
      height={32}
      className="size-8 shrink-0 rounded-md object-contain"
    />
  );
}

export default function Home() {
  return (
    <div className="space-y-8 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="space-y-4">
        <div className="flex items-center">
          <div className="w-full mr-2">
            <h1>Ezekiel (Zeke) Pari</h1>
            <p className="md:text-lg">
              MESR co-founder. Product &amp; systems builder.
            </p>
            <hr className="-mr-2 mb-2" />
            <div className="flex gap-2 flex-wrap items-center">
              <Link
                href="https://www.linkedin.com/in/ezekiel-pari-96a458258/"
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="Ezekiel Pari on LinkedIn"
                className="hover:text-blue-600 transition"
              >
                <Linkedin height={30} width={30} aria-hidden="true" />
              </Link>
              <Link
                href="https://github.com/zekepari"
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="Ezekiel Pari on GitHub"
                className="hover:text-blue-600 transition"
              >
                <Github height={30} width={30} aria-hidden="true" />
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
        </div>

        <p className="max-w-2xl">
          I&apos;m Ezekiel (Zeke) Pari, a Brisbane-based product and systems
          builder and Computer Science student. I co-founded MESR, where
          we&apos;re building AI-assisted condition assessments for infrastructure.
        </p>
      </section>
      <hr />
      <section className="space-y-4">
        <h2>Now</h2>
        <div className="space-y-2">
          <h3 className="flex items-center gap-2">
            <BrandMark src="/logos/mesr.svg" />
            <span>Co-founder, MESR</span>
          </h3>
          <p>
            Right now, the thing I care most about is MESR. We&apos;re building a
            configurable infrastructure inspection app that turns photos and
            video into AI-assisted condition assessments. Field teams capture
            through the method that fits the site; civil and asset engineers
            review the condition, supporting imagery, and uncertainty before
            moving the assessment into existing inspection and maintenance
            workflows.
          </p>
          <p>
            My work spans product and systems across that workflow, from
            flexible capture and AI analysis to engineering review and
            operational handoff.
          </p>
          <p>
            <Link
              href="https://mesr.ai"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit MESR <ExternalLink className="inline-block size-4" />
            </Link>
          </p>

          <div className="divide-y border-y">
            <Link
              href="https://www.generationinnovation.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-3"
            >
              <BrandMark src="/logos/generation-innovation.webp" />
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-neutral-800 transition group-hover:text-blue-600">
                  Generation Innovation
                </span>
                <span className="block text-sm text-gray-600">
                  Participant · building MESR in public
                </span>
              </span>
              <span className="shrink-0 text-sm text-gray-500">2026</span>
            </Link>
            <Link
              href="https://govhack.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-3"
            >
              <BrandMark src="/logos/govhack.webp" />
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-neutral-800 transition group-hover:text-blue-600">
                  GovHack
                </span>
                <span className="block text-sm text-gray-600">
                  Three award wins across public-data projects
                </span>
              </span>
              <span className="shrink-0 text-sm text-gray-500">2024–25</span>
            </Link>
          </div>
        </div>
      </section>
      <hr />
      <section className="space-y-4">
        <h2>Education</h2>
        <p>
          <CircleAlert className="size-4 inline-block" /> Outside Australia? •{" "}
          <Link
            href="https://www.aqf.edu.au/framework/aqf-qualifications"
            className="text-blue-500 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
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
      </section>
      <hr />
      <section className="space-y-4">
        <h2>Products & ventures</h2>
        <p>
          These are not here to prove I can code. They show a pattern: find an
          operational problem, turn it into a useful product or repeatable
          system, and learn from real users. MESR is where I&apos;m compounding that
          pattern now.
        </p>
        <div className="space-y-2">
          <h3 className="flex flex-wrap items-center gap-2">
            <BrandMark src="/logos/rogold.webp" />
            <span>RoGold</span>
            <span className="font-bold text-base text-red-400">
              800k+ users
            </span>
          </h3>
          <p>
            RoGold put my work inside a consumer product serving more than
            800,000 users. My focus was helping turn a growing collection of
            features into a more coherent commercial product: clearer
            onboarding, multilingual reach, subscriptions, live integrations,
            and interactive demonstrations.
          </p>
          <CollapsibleVideo src="/videos/rogold.webm" title="RoGold Demo" />
          <p>
            I also helped unify the free and paid product architecture while
            reducing core code by roughly 70% without removing functionality.
            It taught me that at scale, migration, reliability, revenue, and
            product coherence matter as much as shipping the next feature.
          </p>
          <p>
            <Link
              href="https://rogold.live"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit RoGold <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="flex items-center gap-2">
            <BrandMark src="/logos/smartcall.webp" />
            <span>SmartCall AI</span>
          </h3>
          <p>
            SmartCall AI started with a simple commercial failure: when a
            business misses a call, it can lose the booking, lead, or customer
            attached to it. I built a voice product that could answer,
            understand intent, capture the opportunity, book appointments, and
            hand a useful summary back to the team.
          </p>
          <p>
            The founder work was translating that promise into an operation:
            configurable agents, escalation paths, role-based dashboards,
            CRM-ready records, and infrastructure that could handle demand in
            bursts. The technology served the business outcome, not the other
            way around.
          </p>
          <p>
            <Link
              href="https://smartcallai.com.au"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit SmartCall AI{" "}
              <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="flex flex-wrap items-center gap-2">
            <BrandMark src="/logos/pagesolver.svg" />
            <span>Prompt Solutions</span>
          </h3>
          <p>
            Prompt Solutions began with ordinary website work, then asked a
            better business question: how can good delivery become repeatable
            instead of starting from zero for every client? I turned recurring
            work around content, assets, portfolios, approvals, and publishing
            into shared product workflows.
          </p>
          <p>
            The result was a productised service with client dashboards, media
            handling, before-and-after tools, portfolio systems, controlled
            feature rollout, and subscription billing. It is the clearest
            example of me trying to build an operating system around a service,
            rather than simply selling pages.
          </p>
          <p>
            <Link
              href="https://promptsolutions.com.au"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Prompt Solutions{" "}
              <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="flex items-center gap-2">
            <BrandMark src="/logos/rolinker.webp" />
            <span>RoLinker</span>
          </h3>
          <p>
            RoLinker turned repetitive identity and permissions work across
            Roblox and Discord communities into a self-service product. It gave
            users control of linked accounts while giving operators the
            divisions, dashboards, automation, and developer API needed to run
            larger communities without scaling administration at the same rate.
          </p>
          <CollapsibleVideo src="/videos/rolinker.webm" title="RoLinker Demo" />
          <p>
            <Link
              href="https://rolinker.net"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit RoLinker <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="flex items-center gap-2">
            <BrandMark src="/logos/worldmc.webp" />
            <span>WorldMC</span>
          </h3>
          <p>
            WorldMC was more than a game website. It was the information and
            market layer for a player-run world: people needed to understand
            players, towns, nations, territory, and prices before they could act
            inside the economy. I built the public product and the underlying
            API around those decisions.
          </p>
          <CollapsibleVideo src="/videos/worldmc.webm" title="WorldMC Demo" />
          <p>
            <Link
              href="https://worldmc.net"
              className="text-blue-500 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit WorldMC <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="flex items-center gap-2">
            <BrandMark src="/logos/shockwaves.webp" />
            <span>Shockwaves Radio</span>
          </h3>
          <p>
            Shockwaves Radio combined a public media product with a staffed
            operation. I built the system behind the station—live streaming,
            playlists, schedules, roles, and partner integrations—so the team
            could run programming consistently rather than depend on ad hoc
            coordination. It taught me to design for operators and handoffs,
            not only audiences.
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
              rel="noopener noreferrer"
            >
              Visit Shockwaves Radio{" "}
              <ExternalLink className="inline-block size-4" />
            </Link>
          </p>
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
