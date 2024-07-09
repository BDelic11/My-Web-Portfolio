import Image, { StaticImageData } from "next/image";

interface WhyMeProps {
  id: number;
  image: StaticImageData;
  text: string;
}

const WhyMeIcon = ({ id, image, text }: WhyMeProps) => {
  return (
    <article className="flex flex-col gap-5 justify-center align-middle m-auto">
      <Image
        src={image}
        alt={`icon number ${id}`}
        className="w-20 h-20 m-auto  "
      />
      <h2 className=" text-dark-bg text-center text-2xl">{text}</h2>
    </article>
  );
};

export default WhyMeIcon;
