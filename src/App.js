import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import video1 from './assets/Grestin.mp4';
import profilePicture from './assets/Profile.webp'

const VIDEO_TYPE = 'video';

const MediaComponent = ({ item, index }) => {
  const isVideo = item.type === VIDEO_TYPE;
  const isImage = !isVideo;

  return (
    <div key={index} className="mb-6">
      {isVideo ? (
        <video controls className="w-full rounded-md shadow-md">
          <source src={item.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : isImage ? (
        <img src={item.url} alt={`Project Media ${index}`} className="w-full rounded-md shadow-md" />
      ) : null}
    </div>
  );
};

const ProjectCard = ({ title, description, media }) => (
  <div className="p-6 bg-white mb-8 rounded-lg shadow-md border border-gray-200 text-gray-700">
    <div className="text-3xl font-bold mb-4 text-center text-gray-900">{title}</div>
    <div className="mb-4">{description}</div>
    <div className="flex flex-wrap justify-center">
      {media.map((item, index) => (
        <MediaComponent key={index} item={item} index={index} />
      ))}
    </div>
  </div>
);

const NationalCard = ({ qualifications }) => (
  <div className="p-6 bg-white mb-8 rounded-lg shadow-md border border-gray-200 text-gray-700">
    <div className="text-3xl font-bold mb-4 text-center text-gray-900">National</div>
    {qualifications.map((qualification, index) => (
      <div key={index} className="mb-2">
        <div className="text-lg font-semibold">{qualification.qualification}</div>
        <div className="text-sm text-gray-600">{qualification.graduationDate}</div>
      </div>
    ))}
    <a href={`https://www.aqf.edu.au/framework/aqf-qualifications`} rel="noreferrer noopener" target="_blank" className="hover:text-gray-600">
      <p className='text-center'>Australian Qualifications Framework <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></p>
    </a>
  </div>
);

const IndustryCard = ({ qualifications }) => (
  <div className="p-6 bg-white mb-8 rounded-lg shadow-md border border-gray-200 text-gray-700">
    <div className="text-3xl font-bold mb-4 text-center text-gray-900">Industry</div>
    {qualifications.map((qualification, index) => (
      <div key={index} className="mb-2">
        <div className="text-lg font-semibold">{qualification.qualification}</div>
        <div className="text-sm text-gray-600">{qualification.graduationDate}</div>
      </div>
    ))}
  </div>
);

const ContactCard = ({ github, discord }) => {
  return (
    <div className="p-6 bg-white mb-8 rounded-lg shadow-md border border-gray-200 text-gray-700">
      <div className="flex flex-row justify-center items-center space-x-4">
        <a href={`https://github.com/${github}`} rel="noreferrer noopener" target="_blank" className="hover:text-gray-600">
          <FontAwesomeIcon icon="fa-brands fa-github" /> {github}
        </a>
        <p><FontAwesomeIcon icon="fa-brands fa-discord" /> {discord}</p>
      </div>
    </div>
  );
};

const App = () => {
  const projects = [
    {
      title: 'Menu/Experience UI',
      description:
        'Focus on use of proximity prompt, marketplace service, core gui customization - securely using industry standard methods.',
      media: [
        { type: VIDEO_TYPE, url: video1 },
      ],
    },
    {
      title: 'Asynchronous Wild Spawn',
      description: 'Random teleport plugin with various configuration conditions and integrations based on events or commands, asynchronously & fast.',
      media: [
        { type: VIDEO_TYPE, url: '' }
      ]
    }
  ];
  const national = [
    {
      qualification: 'Bachelor of Computer Science (Minor in Cloud Computing)',
      graduationDate: 'Current'
    },
    {
      qualification: 'Certificate III in Information Technology',
      graduationDate: '2023'
    },
    {
      qualification: 'Certificate III in Business', 
      graduationDate: '2023'
    }
  ];
  const industry = [
    {
      qualification: 'Professional Certificate in Front-End Development (Meta)',
      graduationDate: '2023'
    }
  ];
  const contactInfo = {
    github: 'zekepari',
    discord: '@noreplynotice',
  };

  return (
    <div className="container mx-auto p-6 text-center sm:text-left max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-8xl font-bold text-gray-900">Zeke Pari</div>
          <p className="text-xl text-gray-700 mt-2">ROBLOX, Minecraft, Discord, Web Developer</p>
        </div>
        <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-full ml-4" />
      </div>

      <div className="text-4xl font-bold mb-8 text-gray-900">My Work</div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}

      <div className="text-4xl font-bold mb-8 text-gray-900">Qualifications</div>
      <NationalCard qualifications={national} />
      <IndustryCard qualifications={industry} />

      <div className="text-4xl font-bold mb-8 text-gray-900">Contact</div>
      <ContactCard {...contactInfo} />
    </div>
  );
};

export default App;
