import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    const scrollToSection = (target) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="h-screen flex items-center justify-center relative mb-[-20px]">
            <div className="text-center z-10 px-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    Your Name Goes Here
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-6 mx-auto">
                    You Text goes here<span className="text-blue-500"> Text,</span> <span className="text-red-500">Text,</span> <span className="text-orange-500"> Text,</span> and <span className="text-purple-500">Text.</span>
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.6)]"
                    >
                        Your text goes here
                    </button> 

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                    >
                        your text goes here
                    </button> 
                </div>
            </div>
        </section>
    );
};
