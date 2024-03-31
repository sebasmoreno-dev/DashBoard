import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: "Counter Page",
  description: "a counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in the shop car</span>
      <CartCounter value={5}/>
    </div>
  );
}
