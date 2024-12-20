import './App.css'
import data from '@/helpers/data'
import DisplayCard from '@/components/DisplayCard'
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel"


function App() {
  console.log("data", data)
  return (
    <div className='preview flex min-h-[350px] w-full justify-center p-10 items-center'>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full h-dvh"
      >
        <CarouselContent className="w-full h-dvh">
          {data.map((item) => {
            const { creator, looks, id } = item
            return <DisplayCard key={id} creator={creator} looks={looks} />
          })}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  )


}

export default App
