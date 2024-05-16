export function Projects() {
    return (
        <section className="bg-neutral-100 border-b py-20">
        <div className="container max-w-screen-lg mx-auto space-y-8">
          <h1 className="text-6xl font-black text-center underline decoration-wavy decoration-blue-500">Projects</h1>
          <article className="space-y-4">
            <div>
              <div className="flex justify-between mb-4">
                <h2 className="text-4xl font-bold">RoLinker 🔧</h2>
                <h3 className="text-3xl font-semibold text-neutral-600 text-right">Software Service</h3>
              </div>
              <p>Link Roblox and Discord accounts together by connecting both of them to RoLinker. Access a discord bot which enables commands for Roblox groups, and an optional Roblox bot account to facilitate group management from Discord.</p>
            </div>
            <video className="w-full h-auto max-w-full" controls>
              <source src="/rolinker.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </article>
          <article className="space-y-4">
            <div>
              <div className="flex justify-between mb-4">
                <h2 className="text-4xl font-bold">Arstotzka 🪖</h2>
                <h3 className="text-3xl font-semibold text-neutral-600 text-right">Roblox Game</h3>
              </div>
              <p>Showcasing various custom features such as user interface, marketplace, weapons, economy, NPCs, character customization, and crime.</p>
            </div>
            <video className="w-full h-auto max-w-full" controls>
              <source src="/arstotzka.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </article>
        </div>
      </section>
    )
};