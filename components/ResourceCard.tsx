import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  id: string;
  title: string;
  image: string;
  

}

const ResourceCard = ({ id, title, image }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
          <Link href={`/resource/${id}`}>
          <CardHeader className="flex-center flex-col gap-2.5 !p-0">
         
          <div className="h-fit w-full">
            <Image 
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
        </CardHeader>
        </Link>
   
    </Card>
  )
}

export default ResourceCard