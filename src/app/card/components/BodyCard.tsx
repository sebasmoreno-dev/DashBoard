import React from 'react'
import { CardLink, colorVariants, sizeVariants } from '..'

interface Props {
  selectedSize: string | null;
  selectedColor: string;
}

export const BodyCard = ({selectedColor, selectedSize}: Props) => {
  return (
    <div className="flex-1">
          <h1 className="text-3xl font-semibold">Acme Circles T-Shirt</h1>
          <section className="bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3 mb-10">
            $20.00 USD
          </section>

          <div>
            <section className="mb-5">
              <h2 className="text-md uppercase mb-2">Color</h2>

              <div className="flex gap-2">
                <CardLink
                  propertyVariants={colorVariants}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}

                />
              </div>
            </section>

            <section>
              <h2 className="text-md uppercase mb-2">Sizes</h2>

              <div className="flex gap-2">
                <CardLink
                  propertyVariants={sizeVariants}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
                  item="size"
                />
              </div>
            </section>
          </div>
        </div>
  )
}
