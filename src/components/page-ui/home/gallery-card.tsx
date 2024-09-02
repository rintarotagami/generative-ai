import React from 'react';

interface GalleryCardProps {
    src: string;
    alt: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ src, alt }) => {
    return (
        <div className="z-0">
            <img
                src={src}
                alt={alt}
                width="200px"
            />
        </div>
    );
};

export default GalleryCard;
