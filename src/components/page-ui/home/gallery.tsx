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
        { src: test34, alt: "Image 2" },
        { src: noImage, alt: "Image 3" },
        { src: test43, alt: "Image 4" },
        { src: test34, alt: "Image 2" },
        { src: noImage, alt: "Image 3" },
        { src: test43, alt: "Image 4" },
        { src: test34, alt: "Image 2" },
        { src: noImage, alt: "Image 3" },
        { src: test43, alt: "Image 4" },
        { src: test34, alt: "Image 2" },
        { src: noImage, alt: "Image 3" },
        { src: test43, alt: "Image 4" },
    ];

    return (
        <section className="w-full py-10 space-y-4">
            <h2 className="text-2xl font-bold">プロンプトを見てみる</h2>
            <div ref={gridRef} className="z-0">
                {images.map((image, index) => (
                    <GalleryCard key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
