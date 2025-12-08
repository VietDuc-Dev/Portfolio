"use client";
import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export default function TypingText({
  words,
  typingSpeed = 120,
  deleteSpeed = 60,
  delayBetweenWords = 800,
  className,
}: TypingTextProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index % words.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Gõ chữ
      timer = setTimeout(() => {
        setText(currentWord.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    } else {
      // Xoá chữ
      timer = setTimeout(() => {
        setText(currentWord.slice(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    letterIndex,
    isDeleting,
    index,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className={className}>
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}
