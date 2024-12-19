import { Card, CardContent } from "@/components/ui/card"
import {
  CarouselItem,
} from "@/components/ui/carousel"

function DisplayCard({ creator, looks }) {
  return (
    <CarouselItem className="w-full">
      <div className="p-1">
        <Card>
          <CardContent className="">
            {Math.random()}
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  )
}

export default DisplayCard