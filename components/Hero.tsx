import InlineLink from "./InlineLink";

const Hero = () => {
  return (
    <section className="w-screen h-[50vh] bg-black rounded-b-3xl flex flex-col justify-center px-10 md:px-20 lg:px-40">
      <h1 className="font-mono text-4xl italic font-bold break-all sm:text-6xl 2xl:text-7xl">
        Amsi()
      </h1>
      <p className="mt-5 sm:text-xl md:text-2xl">
        <InlineLink link="https://github.com/techishow" redirect={true}>
          THECODER
        </InlineLink>{" "}
        blog to share little snippets of everything — code, experiences, and
        good tools .
      </p>
    </section>
  );
};

export default Hero;
