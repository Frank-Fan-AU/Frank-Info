import { useEffect, useState } from "react";

export default function HeroAnimation({words}: {words: string[]}) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const currentWord = words[currentIndex];
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            // 打字效果
            if (displayText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                },100); // 打字速度
            } else {
                // 完成打字，等待后开始删除
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 1000); // 显示完整单词的时间
            }
        } else {
            // 删除效果
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50); // 删除速度
            } else {
                // 删除完成，切换到下一个单词
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isTyping, words]);

    // 光标闪烁效果
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <p className="text-3xl sm:text-[42px]">
            <span className="text-transparent sm:bg-gradient-to-r to-foreground bg-gradient-to-t to-70% from-muted-foreground bg-clip-text font-semibold">
                {displayText}
            </span>
            <span className={`${showCursor ? "text-muted-foreground" : "opacity-0"} transition-opacity duration-100`}>
                |
            </span>
        </p>
    );
}