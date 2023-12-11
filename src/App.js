import React from 'react';
import video1 from './assets/grestin.mp4';

const PortfolioItem = ({ title, description, mediaUrl }) => (
  <div className="max-w-3xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {mediaUrl && (
      <div className="max-w-full overflow-hidden rounded-md mb-4">
        {mediaUrl.endsWith('.mp4') ? (
          <video controls className="w-full">
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={mediaUrl} alt={title} className="w-full" />
        )}
      </div>
    )}
    <p className="text-gray-600">{description}</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-semibold">Zeke Pari's Developer Portfolio</h1>
      </header>
      <main className="py-8">
        <PortfolioItem
          title="East Grestin Border"
          description="In the creation of the East Grestin Border, I endeavored to push the boundaries of UI scripting on the ROBLOX platform, focusing on a meticulous customization of the core graphical user interface. I took pride in refining elements like the player list and toolbar, aiming not just for functionality but also for a visually immersive experience that reflects a dedication to detail and aesthetic excellence. The implementation of secure proximity prompts within NPCs and items underscores my commitment to crafting an interactive and secure gaming environment, enriching the overall user experience. Moreover, the integration of an interactive marketplace service, particularly the inclusion of a request feature for the raider pack, demonstrates a forward-thinking approach to in-game economies and user-driven content. Through this project, I aimed to showcase not only technical proficiency in UI scripting but also a passion for innovative design choices that elevate the gaming experience."
          mediaUrl={video1}
        />
      </main>
    </div>
  );
};

export default App;
