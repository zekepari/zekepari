import uniscLogo from "@/assets/unisc.svg";
import metaLogo from "@/assets/meta.png";
import certiportLogo from "@/assets/certiport.png";
import qldGovLogo from "@/assets/qldGov.svg";

interface Institution {
  name: string;
  logoSrc: any;
}

export interface Qualification {
  name: string;
  institution: Institution;
  notes?: string[];
  links?: {
    name: string;
    link: string;
  }[];
}

const institutions = {
  unisc: {
    name: "University of the Sunshine Coast",
    logoSrc: uniscLogo,
  },
  qldGov: {
    name: "Queensland Dept. of Education",
    logoSrc: qldGovLogo,
  },
  meta: {
    name: "Meta",
    logoSrc: metaLogo,
  },
  certiport: {
    name: "Certiport",
    logoSrc: certiportLogo,
  },
} satisfies Record<string, Institution>;

export const qualifications = [
  {
    name: "Bachelor of Computer Science",
    institution: institutions.unisc,
    notes: ["Minor in Cloud Computing", "Graduating 2026"],
  },
  {
    name: "Certificate III in ICT",
    institution: institutions.qldGov,
  },
  {
    name: "Certificate III in Business",
    institution: institutions.qldGov,
  },
  {
    name: "Certificate in Front-End Development",
    institution: institutions.meta,
    links: [
        {
            name: "Digital Certificate",
            link: "https://www.coursera.org/account/accomplishments/professional-cert/K329R2NDRAS9"
        }
    ]
  },
  {
    name: "IT Specialist - Python",
    institution: institutions.certiport,
    links: [
        {
            name: "Digital Certificate",
            link: "https://www.credly.com/badges/4c90f5d6-40e9-4263-a534-d141cba93c69/linked_in?t=sdxccf"
        }
    ]
  },
] satisfies Qualification[];
