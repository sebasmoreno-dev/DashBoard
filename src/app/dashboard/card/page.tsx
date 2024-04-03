import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BodyCard, imageUrls } from "@/app/card";
import { Suspense } from "react";

export default function CardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  /* The code snippet you provided is using the `useSearchParams` hook from Next.js to access and
 manipulate the search parameters in the URL query string. Here's what each line is doing: */

  const selectedColor = (searchParams.color || "black") as string;
  const selectedSize = (searchParams.size || "xs") as string;

  return (
    <Suspense>
      <main className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white flex items-center w-[96%] rounded min-h-[75vh]">
          <div className="flex-[2] flex justify-center">
            <Image
              src={imageUrls[selectedColor]}
              alt="Shirt variant"
              width={622}
              height={550}
            />
          </div>

          <BodyCard selectedColor={selectedColor} selectedSize={selectedSize} />
        </div>
      </main>
    </Suspense>
  );
}
