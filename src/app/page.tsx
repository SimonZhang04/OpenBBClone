import Card from "@/components/GradientCard";
import GlowBorder from "@/components/BorderGradientCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GreyCheck } from "@/components/ui/Icons";
import { BentoGridTwoRow } from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-10">
      <section className="container mx-auto mt-8 flex flex-col items-center justify-center space-y-6 md:space-y-10 lg:mt-20">
        <Button className="bg-transparent border-[0.5px] rounded-lg border-white text-white px-2 py-1">
          <p className="text-sm"> New Case Studies. Check it out!</p>
        </Button>
        <h1 className="text-center text-[1.75rem]/[1.2em] font-bold text-white md:title-lg-bold lg:text-[3.5rem]/[1.2em]">
          Investment research
        </h1>
        <h1 className="bg-gradient-to-r text-[1.75rem]/[1.2em] font-bold md:title-lg-bold lg:text-[3.5rem]/[1.2em] from-[#0465B1] to-[#0088CC] inline-block text-transparent bg-clip-text">
          made easy with AI.
        </h1>
        <p className="text-center">
          Customize and speed up your analysis, bring your own data, and create
          instant reports to gain a competitive edge.
        </p>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Start free trial
        </Button>
        <ul className="flex space-x-4 text-gray-700">
          <li className="flex">
            <GreyCheck /> No credit card required
          </li>
          <li className="flex">
            <GreyCheck /> 3-week free trial
          </li>
          <li className="flex">
            <GreyCheck /> Instant access
          </li>
        </ul>
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
      <section className="container mx-auto mt-8 flex flex-col items-center justify-center space-y-6 md:space-y-10 lg:mt-20">
        <h1>Next-Level Features</h1>
        <p>Boost your analysis with Al and streamlined workflows.</p>
        <BentoGridTwoRow />
      </section>
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
