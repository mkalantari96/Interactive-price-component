export default function Slider({
  views,
  setViews,
}: {
  views: number;
  setViews: (views: number) => void;
}) {
  const percentage = ((views - 10) / (200 - 10)) * 100;

  return (
    <div className="relative w-full mt-6 px-2 sm:px-4">
      <input
        type="range"
        min="10"
        max="200"
        value={views}
        onChange={(e) => setViews(Number(e.target.value))}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider-thumb focus:outline-none focus:ring-2 focus:ring-blue-300"
        style={{
          background: `linear-gradient(to right, #9FF0E9 0%, #9FF0E9 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
        }}
      />
    </div>
  );
}
