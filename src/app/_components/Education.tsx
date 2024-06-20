import Image from "next/image";
import { qualifications } from "@/qualifications";
import Link from "next/link";

export function Education() {
  return (
    <section className="border-b py-20">
      <div className="container mx-auto max-w-screen-lg space-y-8 text-center md:text-left">
        <h1 className="text-center text-6xl font-black underline decoration-blue-500 decoration-double">
          Education
        </h1>
        <p>
          <a
            href="https://www.aqf.edu.au/framework/aqf-qualifications"
            target="_blank"
            className="text-blue-500 hover:text-blue-400"
          >
            Australian Qualifications Framework ↗
          </a>
        </p>
        {qualifications.map((qualification) => (
          <article className="flex flex-col-reverse items-center justify-between md:flex-row md:items-start">
            <div>
              <h2 className="text-4xl font-bold">{qualification.name}</h2>
              <ul className="list-inside list-disc">
                {qualification.notes?.map((note) => <li>{note}</li>)}
                {qualification.links?.map((link) => (
                  <li>
                    <Link
                      href={link.link}
                      target="_blank"
                      className="text-blue-500 hover:text-blue-400"
                    >
                      {link.name} ↗
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={qualification.institution.logoSrc}
              alt={`${qualification.institution.name} Logo`}
              height={200}
              width={200}
              className="h-20 w-48 object-contain"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
