import React from 'react';
import { useSetAtom } from 'jotai';
import { promptAtom } from '@/atoms/promptAtoms';

interface GalleryCardProps {
    src: string;
    alt: string;
    prompt: string;
    negative_prompt: string;
    width: number;
    height: number;
    tags: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ src, alt, prompt, negative_prompt, width, height }) => {
    const setPrompt = useSetAtom(promptAtom);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setPrompt((prevPrompt) => {
            if (prevPrompt.useTemplate) {
                const newPrompt = {
                    prompt,
                    negative_prompt,
                    width,
                    height,
                    useTemplate: true,
                    model: ''
                };
                console.log(newPrompt);
                return newPrompt;
            }
            return prevPrompt;
        });
        event.currentTarget.style.border = '2px solid white';
    };

    return (
        <div className="relative rounded-lg overflow-hidden group" onClick={handleClick}>
            <img
                src={src}
                alt={alt}
                width="200px"
                className="group-hover:brightness-50 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg">{prompt}</span>
            </div>
        </div>
    );
};

export default GalleryCard;
