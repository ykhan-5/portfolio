import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const technologies = [
  { name: "React", image: "/public/lovable-uploads/8950adde-f044-4d56-83e3-47ca1c879f75.png" },
  { name: "Node.js", image: "/public/lovable-uploads/8950adde-f044-4d56-83e3-47ca1c879f75.png" },
  { name: "Python", image: "/public/lovable-uploads/8950adde-f044-4d56-83e3-47ca1c879f75.png" },
  { name: "C#", image: "/public/lovable-uploads/8950adde-f044-4d56-83e3-47ca1c879f75.png" },
  { name: "Java", image: "/public/lovable-uploads/8950adde-f044-4d56-83e3-47ca1c879f75.png" }
];

const TechCarousel = () => {
  return (
    <Carousel className="w-full max-w-lg mx-auto" opts={{ loop: true }}>
      <CarouselContent>
        {technologies.map((tech, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-4">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md">
                <img src={tech.image} alt={tech.name} className="w-16 h-16 object-contain" />
                <h3 className="font-semibold text-lg">{tech.name}</h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TechCarousel;
