import CardLanding from "./CardLanding";
import IconScroll from "./IconScroll";

const SectionLanding = () => {
  return (
    <section className="relative h-screen w-full flex justify-center items-center bg-neutral-50">
      <CardLanding />

      <div className="absolute bottom-5 animate-bounce">
        <IconScroll size={36} />
      </div>
    </section>
  );
};

export default SectionLanding;
