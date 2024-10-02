export default function Price({ price }: { price: number }) {
  return (
    <div className="flex items-center justify-center my-8">
      <p className="flex items-center">
        <span className="text-gray-900 text-4xl font-extrabold leading-none ">
          ${price.toFixed(2)}
        </span>
        <span className="text-gray-500 ml-2 text-sm leading-none flex items-center">
          / month
        </span>
      </p>
    </div>
  );
}
