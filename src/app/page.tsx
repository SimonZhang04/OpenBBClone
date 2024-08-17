import Card from "@/components/GradientCard";
import GlowBorder from "@/components/BorderGradientCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GreyCheck } from "@/components/ui/Icons";
import { BentoGridTwoRow } from "@/components/BentoGrid";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-10 pb-20">
      <section className="container mx-auto mt-8 flex flex-col items-center justify-center">
        <Button className="bg-transparent border-[0.5px] border-white text-white hover:bg-transparent">
          <p className="text-xs"> New Case Studies. Check it out!</p>
        </Button>
        <h1 className="text-center text-[1.75rem]/[1.2em] mt-8 font-bold text-gray md:title-lg-bold lg:text-[3.5rem]/[1.2em]">
          Investment research
        </h1>
        <h1 className="bg-gradient-to-r text-[1.75rem]/[1.2em] font-bold md:title-lg-bold lg:text-[3.5rem]/[1.2em] from-[#0465B1] to-[#0088CC] inline-block text-transparent bg-clip-text">
          made easy with AI.
        </h1>
        <p className="text-center mt-4 text-sm w-2/3">
          Customize and speed up your analysis, bring your own data, and create
          instant reports to gain a competitive edge.
        </p>
        <Button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Start free trial
        </Button>
        <ul className="mt-4 md:flex space-x-4 text-gray-500">
          <li className="flex text-xs">
            <GreyCheck /> No credit card required
          </li>
          <li className="flex text-xs">
            <GreyCheck /> 3-week free trial
          </li>
          <li className="flex text-xs">
            <GreyCheck /> Instant access
          </li>
        </ul>
      </section>
      <GlowBorder>
        <Image
          src="/openbb1.png"
          alt="Demo picture"
          width={700}
          height={525}
          layout="responsive"
          sizes="80vw"
        />
      </GlowBorder>
      <section className="container mt-8 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Next-Level Features</h1>
        <p className="text-sm text-gray">
          Boost your analysis with Al and streamlined workflows.
        </p>
        <BentoGridTwoRow />
      </section>
      <section className="container mt-8 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">The Ultimate Analysis Suite</h1>
        <p className="text-sm text-gray">
          Unmatched precision, efficiency, and flexibility with Terminal Pro.
        </p>
        <Card
          color="#0088CC"
          title="The first AI-powered financial terminal"
          description="Simplify your workflow with tailor-made templates. Our Add-in for Excel fetches financial data so you can focus on making investment decisions."
          buttonText="Start free trial"
          direction="top right"
        />
        <div className="md:flex">
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
      </section>
      <section className="container mt-8 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Trusted By Professionals</h1>
        <p className="text-sm text-gray">
          See what professional are saying about us
        </p>
        <ReviewsCarousel />
      </section>
      <section className="container flex flex-col items-center justify-center space-y-4 mt-20">
        <h1 className="text-lg font-bold uppercase">
          Ready to build your dream dashboard?
        </h1>
        <p className="text-sm text-gray">
          Sign up to Terminal Pro today and become efficient with AI-driven
          analysis.
        </p>
        <Input
          type="email"
          placeholder="BobbyAxelrod@gmail.com"
          className="bg-[#1E1E1E] border-[0.5px] text-xs border-gray-500 rounded-lg"
        />
      </section>
    </main>
  );
}
