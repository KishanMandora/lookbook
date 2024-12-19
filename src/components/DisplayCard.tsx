import {
  CarouselItem, Carousel,
  CarouselContent,
} from "@/components/ui/carousel"
import { Creator, Look } from "@/helpers/type";
import Autoplay from "embla-carousel-autoplay"

type DisplayCardProps = {
  creator: Creator;
  looks: Look[];
}

function DisplayCard({ looks }: DisplayCardProps) {
  return (
    <CarouselItem className="w-full h-9/12">
      <Carousel className="w-full" opts={{
        loop: true,
      }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {looks.map((look) => {
            return <CarouselItem key={look.id}>
              <div className="w-full h-full relative">
                <img src={look.url} alt="look" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 overflow-scroll flex w-full gap-2">
                  {look.products.map((product) => {
                    return (
                      <a target="_blank" href={product.url} className="p-1 min-w-40 w-4/5 flex gap-3 bg-black">
                        <div className="flex items-center">
                          <img src={product.thumbnailUrl} alt="product" className="w-12 h-12" />
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-white text-sm font-bold">{product.name}</h2>
                          <p className="text-white text-sm">{product.brand}</p>
                          <p className="text-white text-sm">${product.price}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </CarouselItem>
          })}
        </CarouselContent>
      </Carousel>
    </CarouselItem>
  )
}

export default DisplayCard