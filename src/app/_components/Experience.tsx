import Image from "next/image";
import MetroNorth from "@/assets/metroNorth.png"

export function Experience() {
  return (
    <section className="bg-neutral-100 border-b py-20">
      <div className="container max-w-screen-lg mx-auto space-y-8">
        <h1 className="text-6xl font-black text-center underline decoration-blue-500">Experience</h1>
        <article>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-4xl font-bold md:text-left text-center">Health Information, Metro North</h2>
            <Image src={MetroNorth} alt="Metro North Logo" className="w-48 right-0" />
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
  )
};