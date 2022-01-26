import { Project } from "../types";

const CardProject = ({
  href,
  backgroundImage,
  backgroundImagePosition,
  title,
  description,
}: Project) => {
  const alignItems =
    backgroundImagePosition === "top" ? "items-start" : "items-center";

  return (
    <article>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="bg-white hover:bg-neutral-100 focus:bg-neutral-100 rounded-lg transition duration-300 shadow-2xl hover:shadow-xl focus:shadow-xl block relative overflow-hidden"
      >
        <div
          className={`w-full h-32 flex ${alignItems} justify-center overflow-hidden`}
        >
          <img
            src={backgroundImage}
            alt={title}
            className="min-h-full min-w-full"
          />
        </div>

        <div className="pt-3 pb-5 px-5 min-h-[15rem]">
          <h2 className="font-semibold text-2xl">{title}</h2>

          <h3 className="text-neutral-500 break-words">{href}</h3>

          <p className="mt-3">{description}</p>
        </div>
      </a>
    </article>
  );
};

export default CardProject;
