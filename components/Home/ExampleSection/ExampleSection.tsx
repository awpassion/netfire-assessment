import GradientText from "@/components/UI/GradientText";
import Link from "next/link";

const ExampleSection = () => {
  return (
    <div className="container mx-auto flex flex-col py-8 md:py-16 items-center">
      <div className="border bg-stone-100 border-stone-700 uppercase p-3 rounded-xl text-xs font-exo">
        Example Section
      </div>

      <p className="mt-5 md:mt-8 text-center font-exo text-lg md:text-2xl font-medium">
        Lorem{" "}
        <GradientText>
          ipsum dolor sit amet consectetur adipisicing elit Et alias tenetur
          nemo
        </GradientText>{" "}
        iste repellat quis. Corporis est pariatur, blanditiis eum vel reiciendis
        ullam quam, odit eligendi iure non! Aspernatur.
      </p>

      <Link
        href={"/"}
        className="mt-8 underline underline-offset-4 font-medium text-stone-800 text-xs md:text-sm"
      >
        SEE MORE
      </Link>
    </div>
  );
};

export default ExampleSection;
