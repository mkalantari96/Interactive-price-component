export default function SelectBuyingType({
  isYearly,
  setIsYearly,
}: {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
}) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-3 text-sm font-semibold">
        <span className="text-gray-500">Monthly Billing</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#28d6c6]"></div>
        </label>
        <span className="text-gray-500">
          Yearly Billing{" "}
          <span className="ml-1 text-red-400 bg-[#FFEAE3] px-2 py-1 rounded-full text-[0.6rem]">
            -25%
          </span>
        </span>
      </div>
    </div>
  );
}
