export default function Home() {
    return (
        <div className="bg-black text-gray-300 font-sans min-h-screen">
            <header className="bg-gray-800 text-gray-100 p-6 shadow-md">
                <h1 className="text-4xl font-bold text-center" style={{ color: "rgb(64, 224, 208)" }}>
                    Jujutsu Kaisen Infinite Guide: Your Ultimate Resource
                </h1>
                <p className="text-center mt-2 text-gray-400">
                    Welcome to the most comprehensive <strong>Jujutsu Kaisen Infinite guide</strong>, your go-to resource for everything about the game.
                </p>
            </header>

            <main className="max-w-5xl mx-auto p-6">
                {/* Introduction Section */}
                <section id="introduction" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(64, 224, 208)" }}>Introduction</h2>
                    <p>
                        Jujutsu Kaisen Infinite is the highly anticipated action RPG based on the popular anime and manga series.
                        This guide is designed to provide you with everything you need to know about the game, from mastering cursed techniques
                        to understanding character progression and combat mechanics.
                    </p>
                    <p>
                        Whether you're looking for character builds, domain expansion guides, or cursed technique combinations,
                        we've got you covered. Check out our <a href="https://wiki.jujutsuinfinite.co" target="_blank"
                        rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">official wiki</a>, 
                        <a href="https://jujutsuinfinite.co/video-guides" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">video guides</a>, 
                        or join the <a href="https://jujutsuinfinite.co/discussions" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">community discussions</a>.
                        You can also play the game on <a href="https://www.roblox.com/games/18505741738/Jujutsu-Infinite-1-DAY" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Roblox</a>.
                    </p>
                </section>

                {/* Key Features Section */}
                <section id="features" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(64, 224, 208)" }}>Key Features</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Authentic recreation of the Jujutsu Kaisen universe with stunning visuals</li>
                        <li>Over 20 playable characters from the series, each with unique cursed techniques</li>
                        <li>Dynamic combat system featuring Domain Expansion and Black Flash mechanics</li>
                        <li>Multiple game modes including Story, Versus, and Mission modes</li>
                        <li>Online multiplayer with ranked matches and custom tournaments</li>
                    </ul>
                </section>

                {/* Gameplay Mechanics Section */}
                <section id="gameplay" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(64, 224, 208)" }}>Gameplay Mechanics</h2>
                    <p>
                        Master the intricate combat system that faithfully recreates the supernatural abilities from the series.
                        Learn to harness cursed energy, execute perfect Black Flash timing, and unleash devastating Domain Expansions.
                    </p>
                    <p>
                        The game features a unique cursed energy management system, strategic battle mechanics, and character-specific
                        techniques that create deep, engaging gameplay for both casual and competitive players.
                    </p>
                </section>

                {/* Characters Section */}
                <section id="characters" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(64, 224, 208)" }}>Playable Characters</h2>
                    <p>
                        Choose from a roster of powerful jujutsu sorcerers and cursed spirits, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Yuji Itadori - Divergent Fist specialist with Sukuna transformation</li>
                        <li>Megumi Fushiguro - Ten Shadows Technique master</li>
                        <li>Nobara Kugisaki - Straw Doll Technique expert</li>
                        <li>Satoru Gojo - Limitless Technique and Six Eyes wielder</li>
                        <li>Ryomen Sukuna - King of Curses with devastating techniques</li>
                    </ul>
                </section>

                {/* Game Modes Section */}
                <section id="modes" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(64, 224, 208)" }}>Game Modes</h2>
                    <p>
                        Experience different aspects of the Jujutsu Kaisen universe through various game modes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Story Mode - Follow an original narrative in the JJK universe</li>
                        <li>PVP Mode - Test your skills against other players online</li>
                        <li>Mission Mode - Complete challenges and earn exclusive rewards</li>
                        <li>AFK Mode - Gain spins and resources while away</li>
                    </ul>
                    <p className="mt-4">
                        For detailed guides on each mode, visit our <a href="https://wiki.jujutsuinfinite.co" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">wiki</a> or watch our <a href="https://jujutsuinfinite.co/video-guides" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">video tutorials</a>.
                    </p>
                </section>
            </main>

            <footer className="bg-gray-800 text-gray-400 p-6 text-center">
                <p>&copy; {new Date().getFullYear()} Jujutsu Kaisen Infinite Resource Hub. All rights reserved.</p>
            </footer>
        </div>
    )
} 