import IconContact from "./IconContact";
import IconGitHub from "./IconGitHub";
import IconResume from "./IconResume";
import LinkIcon from "./LinkIcon";
import profileUrl from "../assets/profile.jpg";
import resumeUrl from "../assets/resume.pdf";

const CardLanding = () => {
  return (
    <article className="p-6 md:p-10 transition duration-300 shadow-2xl hover:shadow-xl focus-within:shadow-xl rounded-lg flex flex-col md:flex-row items-center border border-neutral-200">
      <img
        src={profileUrl}
        alt="A picture of me"
        className="rounded-full h-40 w-40 mb-5 md:mb-0"
      />

      <div className="md:ml-10">
        <h1 className="font-semibold text-5xl">Davis McPhee</h1>

        <h2 className="font-light text-3xl text-neutral-500">
          Software Developer
        </h2>

        <ul className="mt-4 flex">
          <li className="inline-flex pr-4 mr-4 border-r border-neutral-400">
            <LinkIcon
              icon={IconGitHub}
              href="https://github.com/davismcphee"
              label="GitHub"
            />
          </li>

          <li className="inline-flex pr-4 mr-4 border-r border-neutral-400">
            <LinkIcon icon={IconResume} href={resumeUrl} label="Resume" />
          </li>

          <li className="inline-flex">
            <LinkIcon
              icon={IconContact}
              href="mailto:contact@davismcphee.com"
              label="Contact"
            />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CardLanding;
