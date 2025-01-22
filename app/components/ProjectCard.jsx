"use client";
import Image from "next/image";

export default function ProjectCard({
  number,
  title,
  description,
  image,
  url,
  direction = "right",
}) {
  const isRight = direction === "right";

  return (
    <div
      className={`relative w-full  flex flex-col mobile:flex-col md:flex-row items-center justify-between p-6 rounded-lg overflow-visible ${
        isRight ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* צד שמאל: תמונה עם TiltedCover ומספר */}
      <div className="w-full md:w-1/3 flex justify-start items-center relative mb-4 md:mb-0">
        <span
          className={`absolute z-10 text-outline  font-bold opacity-30
                   mobile:text-[80px] mobile:top-[-78px]  
                   md:text-[180px] md:top-1/2 md:-translate-y-1/2
                     ${
                       isRight
                         ? "md:right-[-20px]  mobile:right-[5px] mobile:-translate-x-0"
                         : "md:left-[-15px] mobile:left-[15px] mobile:-translate-x-0"
                     }
                    `}
        >
          {number}
        </span>
        <div
          className={`relative z-30  ${
            isRight
              ? "md:translate-x-[-130px] mobile:translate-x-[8px]"
              : "md:translate-x-[130px] mobile:translate-x-[-3px]"
          } `}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-transform duration-500 ease-out"
          >
            <TiltedCover
              direction={direction}
              image={{
                src: image,
                alt: title,
              }}
            />
          </a>
        </div>
      </div>

      {/* צד ימין: תיאור הפרויקט */}
      <div
        className={`flex  font-varela flex-col justify-center items-start w-full md:w-1/3 text-white mobile:text-center md:justify-end md:items-end
        ${
          isRight
            ? "mobile:items-end mobile:text-right"
            : "mobile:items-start mobile:text-left"
        }
        `}
      >
        <h2
          className={`text-xl -mt-5 md:-mt-0 md:text-5xl font-bold text-[#ff0088] ${
            isRight ? "mobile:mr-3" : "mobile:ml-5"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-3xl md:mt-1  text-gray-300 mobile:text-sm ${
            isRight ? "mobile:mr-3" : "mobile:ml-5"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function TiltedCover({ image, direction = "right" }) {
  const tiltLeft = direction === "right";
  const factor = tiltLeft ? 1 : -1;

  return (
    <div
      className={`relative w-[400px] h-[250px] overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-500 ease-out   z-20 mobile:w-[350px] mobile:h-[220px] border border-gray-300 border-8 cursor-pointer
            hover:border-gray-100 hover:border
              transition-all duration-200
            `}
      style={{
        transform: `perspective(800px) rotateY(${factor * 15}deg) scale(0.95)`,
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={400}
        height={250}
        className="w-full   h-full object-cover "
        priority
      />
    </div>
  );
}
