import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY,
                
            );
            alert("Message has been sent!");
            e.target.reset();
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Oops! Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-2xl w-full px-10">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent text-center">
                    Your Text goes here
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            className="w-full max-w-[800px] bg-white/5 border border-white/10 rounded px-8 py-5 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blur"
                            placeholder="Name"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            className="w-full max-w-[800px] bg-white/5 border border-white/10 rounded px-8 py-5 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blur"
                            placeholder="example@example.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            rows={6}
                            className="w-full max-w-[800px] bg-white/5 border border-white/10 rounded px-8 py-5 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blur"
                            placeholder="Type your message here..."
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full max-w-[800px] bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] duration-300 ease-in-out"
                    >
                        Send Message
                    </button>

                    {/* Social Links Section */}
                    <div className="text-center mt-6">
                        <a
                            href="LINK GOES HERE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mr-4"
                        >
                            Put your link here
                        </a>

                    </div>
                </form>
            </div>
        </section>
    );
};

