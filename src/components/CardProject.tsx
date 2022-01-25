import { Project } from "../types";

const CardProject = ({
  href,
  backgroundImage,
  backgroundImagePosition,
  title,
  description,
}: Project) => {
  const backgroundPosition =
    backgroundImagePosition === "top" ? "bg-top" : "bg-center";

  return (
    <a
      href={href}
      target="_blank"
      className="bg-white hover:bg-neutral-100 focus:bg-neutral-100 rounded-lg transition duration-300 shadow-2xl hover:shadow-xl focus:shadow-xl block relative overflow-hidden"
    >
      <div
        className={`w-full h-32 bg-cover ${backgroundPosition}`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      <div className="pt-3 pb-5 px-5 min-h-[15rem]">
        <h3 className="font-semibold text-2xl">{title}</h3>

        <h4 className="text-neutral-500 break-words">{href}</h4>

        <p className="mt-3">{description}</p>
      </div>
    </a>
  );
};

export default CardProject;
