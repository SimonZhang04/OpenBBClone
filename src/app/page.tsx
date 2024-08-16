import Card from "@/components/GradientCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Card
        color="#4CAF50"
        title="Automate your workflows"
        description="Simplify your workflow with tailor-made templates. Our Add-in for Excel fetches financial data so you can focus on making investment decisions."
        buttonText="Find out more"
        direction="left"
      />
    </main>
  );
}
