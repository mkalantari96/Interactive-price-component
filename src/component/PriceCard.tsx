import { useState } from "react";

import PageView from "./PageView";
import Slider from "./Slider";
import Price from "./Price";
import SelectBuyingType from "./SelectBuyingType";
import Details from "./Details";
import Button from "./Button";

export default function PriceCard() {
  const [views, setViews] = useState(100);
  const [isYearly, setIsYearly] = useState(false);

  const price = isYearly ? views * 0.16 * 0.75 : views * 0.16;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFF] p-4">
      <div className="bg-white rounded-lg shadow-lg px-6 py-8 max-w-md w-full">
        <PageView views={views} />
        <Slider views={views} setViews={setViews} />
        <Price price={price} />
        <SelectBuyingType isYearly={isYearly} setIsYearly={setIsYearly} />
        <Details />
        <Button />
      </div>
    </div>
  );
}
