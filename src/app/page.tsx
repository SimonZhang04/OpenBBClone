import Card from "@/components/GradientCard";
import GlowBorder from "@/components/BorderGradientCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section className="container mx-auto mt-8 flex flex-col items-center justify-center space-y-6 md:space-y-10 lg:mt-20">
        <h1 className="text-center text-[1.75rem]/[1.2em] font-bold text-white md:title-lg-bold lg:text-[3.5rem]/[1.2em]">
          Investment research
        </h1>
        <h1 className="bg-gradient-to-r text-[1.75rem]/[1.2em] font-bold md:title-lg-bold lg:text-[3.5rem]/[1.2em] from-[#0465B1] to-[#0088CC] inline-block text-transparent bg-clip-text">
          made easy with AI.
        </h1>
        <p>
          Customize and speed up your analysis, bring your own data, and create
          instant reports to gain a competitive edge.
        </p>
      </section>
      <GlowBorder>
        <Image
          src="/openbb1.png"
          alt="Demo picture"
          width={700} // Use a suitable width
          height={525} // Use a suitable height
          layout="responsive"
          sizes="80vw"
        />
      </GlowBorder>
      <div className="flex">
        <Card
          color="#204C2F"
          title="Automate your workflows"
          description="Simplify your workflow with tailor-made templates. Our Add-in for Excel fetches financial data so you can focus on making investment decisions."
          buttonText="Find out more"
          direction="top right"
        />
        <Card
          color="#5B3C25"
          title="Build your edge"
          description="Simplify your workflow with tailor-made templates. Our Add-in for Excel fetches financial data so you can focus on making investment decisions."
          buttonText="Find out more"
          direction="top right"
        />
      </div>
    </main>
  );
}
