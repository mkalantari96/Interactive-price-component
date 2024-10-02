export default function PageView({ views }: { views: number }) {
  return (
    <p className="text-center font-semibold text-lg uppercase text-gray-500 tracking-wider mb-8">
      <span className="font-bold">{views}K</span> Pageviews
    </p>
  );
}
