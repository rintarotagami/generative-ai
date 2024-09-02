import React, { useEffect, useRef } from 'react';
import noImage from '@/assets/noImage.png';
import test34 from '@/assets/test34.jpg';
import test43 from '@/assets/test43.jpg';
import MagicGrid from 'magic-grid';
import GalleryCard from './gallery-card';

const Gallery: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gridRef.current) {
            const magicGrid = new MagicGrid({
                container: gridRef.current,
                static: true,
                animate: true,
            });
            magicGrid.listen();
        }
    }, []);

    const images = [
        { src: test34, alt: "Image 2", prompt: "美しい風景", negative_prompt: "曇り", width: 800, height: 600 },
        { src: noImage, alt: "Image 3", prompt: "シンプルなデザイン", negative_prompt: "複雑", width: 1024, height: 768 },
        { src: test43, alt: "Image 4", prompt: "夜の街", negative_prompt: "昼間", width: 640, height: 480 },
        { src: test34, alt: "Image 2", prompt: "美しい風景", negative_prompt: "曇り", width: 800, height: 600 },
        { src: noImage, alt: "Image 3", prompt: "シンプルなデザイン", negative_prompt: "複雑", width: 1024, height: 768 },
        { src: test43, alt: "Image 4", prompt: "夜の街", negative_prompt: "昼間", width: 640, height: 480 },
        { src: test34, alt: "Image 2", prompt: "美しい風景", negative_prompt: "曇り", width: 800, height: 600 },
        { src: noImage, alt: "Image 3", prompt: "シンプルなデザイン", negative_prompt: "複雑", width: 1024, height: 768 },
        { src: test43, alt: "Image 4", prompt: "夜の街", negative_prompt: "昼間", width: 640, height: 480 },
        { src: test34, alt: "Image 2", prompt: "美しい風景", negative_prompt: "曇り", width: 800, height: 600 },
        { src: noImage, alt: "Image 3", prompt: "シンプルなデザイン", negative_prompt: "複雑", width: 1024, height: 768 },
        { src: test43, alt: "Image 4", prompt: "夜の街", negative_prompt: "昼間", width: 640, height: 480 },
    ];

    return (
        <section className="w-full py-10 space-y-4 text-center">
            <h2 className="text-2xl font-bold"></h2>
            <div ref={gridRef} className="z-0">
                {images.map((image, index) => (
                    <GalleryCard 
                        key={index} 
                        src={image.src} 
                        alt={image.alt} 
                        prompt={image.prompt} 
                        negative_prompt={image.negative_prompt} 
                        width={image.width} 
                        height={image.height} 
                        tags={""} 
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
