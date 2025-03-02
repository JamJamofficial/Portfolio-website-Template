import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const fullText = "Loading . . . . ";

    useEffect(() => {
        let index = 0;
        let progressValue = 0;

        const textInterval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(textInterval);
            }
        }, 100);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => onComplete(), 500);
                    return 100;
                }
                return prev + 5;
            });
        }, 200);

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden mt-2">
                <div
                    className="h-full bg-blue-500 shadow-[0_0_15px_#4CAF50] transition-all duration-200 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};
