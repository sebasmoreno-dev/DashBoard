import Link from "next/link";
import React from "react";

interface Props {
  propertyVariants: string[];
  selectedSize: string | null;
  selectedColor: string;
  item?: "color" | "size";
}

export const CardLink = ({
  propertyVariants,
  selectedSize,
  selectedColor,
  item = "color",
}: Props) => {
  const propertySelected = item === "color" ? selectedColor : selectedSize;

  return (
    <div className="flex gap-2">
      {propertyVariants.map((property, index) => (
        <Link
          key={index}
          href={
            item === "color"
              ? `?${new URLSearchParams({
                color: property,
                size: selectedSize!
              })}`
              : `?${new URLSearchParams({
                color: selectedColor,
                size: property
              })}`
          }
          className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
            propertySelected === property
              ? "border-blue-500"
              : "border-gray-200"
          }`}
        >
          {item === "color" ? property.charAt(0).toUpperCase() + property.slice(1) :  property.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
