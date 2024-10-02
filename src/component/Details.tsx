import tikIcon from "../assets/tik-icon.svg";

export default function Details() {
  return (
    <div className="flex flex-col items-center mt-8 w-full border-t pt-8">
      <ul className="space-y-3 text-sm font-semibold text-gray-500 w-full">
        {["Unlimited websites", "100% data ownership", "Email reports"].map(
          (item, index) => (
            <li key={index} className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <img src={tikIcon} alt="tick-icon" className="w-4 h-4" />
                <span>{item}</span>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
