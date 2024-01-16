import React from 'react';

interface BannerProps {
  imageUrl: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title }) => {
  return (
    <div>
      <div
        className="relative overflow-hidden rounded-sm bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url(${imageUrl})`, height: 400 }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h1 className="text-center w-97 text-white text-4xl font-bold font-['Inter']">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
