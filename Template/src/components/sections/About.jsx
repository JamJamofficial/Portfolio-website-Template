export const About = () => {
    const frontendSkills = ["Text", "Text", "Text", "Textt"];
    const backendSkills = ["TEXT", "TEXT", "TEXT", "TEXT"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="w-full px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="mb-8 text-center">
                    <p className="text-white">
                        YOUR TEXT GOES HERE
                    </p>
                </div>

                <div className="mb-8 text-center">
                    <p className="text-gray-300 mb-6 w-full p-6 rounded-xl hover:-translate-y-1 transition-all">
                        I’m a <strong>YOUR TEXT GOES HERE</strong> with a <strong>YOUR TEXT GOES HERE</strong> and <strong>YOUR TEXT GOES HERE</strong>, ranging from <strong>YOUR TEXT GOES HERE</strong>. YOUR TEXT GOES HERE <strong>YOUR TEXT GOES HERE</strong> YOUR TEXT GOES HERE. When I’m not ___, you’ll find me <strong>YOUR TEXT GOES HERE</strong> , or  <strong>YOUR TEXT GOES HERE</strong>. I’m <strong>Text, Text</strong> , Text. I’m also into <strong>Text</strong> , Text.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => {
                                    return (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => {
                                    return (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <section className="mt-8 text-center">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                            Dev Experience
                        </h2>
                        <p className="text-gray-300 mb-6 w-full p-6 rounded-xl hover:-translate-y-1 transition-all">
                            <strong> Your text goes here</strong>
                            </p>
                    </section>
                </div>
            </div>
        </section>
    );
};
