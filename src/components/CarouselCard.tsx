import Image from "next/image";

interface TestimonialCardProps {
  text: string;
  image: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  image,
  name,
  title,
}) => {
  return (
    <div className="bg-[#0F141C] text-white rounded-lg p-8 w-full mx-auto">
      <p className="text-center text-lg leading-relaxed">{text}</p>
      <div className="mt-8 flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={12}
          height={12}
          className="w-12 h-12 rounded-full"
        />
        <h3 className="mt-4 text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
