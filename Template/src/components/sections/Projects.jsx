export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Navere Section */}
                    <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-2xl font-bold mb-2">Text</h3>
                        <p className="text-gray-300 mb-4">
                            Text goes here.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Text", "Text", "Text", "Text", "Text", "Text"].map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a 
                            href="Link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 inline-block border border-green-500 text-green-500 py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white transition-all"
                        >
                            Check Out
                        </a>
                    </div>

                    {/* Browser Utils Section */}
                    <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-2xl font-bold mb-2">Text goes here</h3>
                        <p className="text-gray-300 mb-4">
                            Text goes here.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Text", "Text", "Text", "Text", "Text"].map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a 
                            href="Link goes here" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 inline-block border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                        >
                            Check Out
                        </a>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(128,0,128,0.2)] transition-all w-full md:w-2/3 text-center">
                        <h3 className="text-2xl font-bold mb-2">Text</h3>
                        <p className="text-gray-300 mb-4">
                            Text
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Text", "Text", "Text", "Text", "Text", "Text"].map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a 
                            href="Link goes here" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 inline-block border border-purple-500 text-purple-500 py-2 px-4 rounded-lg hover:bg-purple-500 hover:text-white transition-all"
                        >
                            Check Out
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
