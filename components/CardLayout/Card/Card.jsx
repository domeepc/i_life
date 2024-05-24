import Image from 'next/image';
import Rating from './Rating';

const EUR = 7.54;

export default function Card({ product }) {
  return (
    <div className="border-2 border-gray-200 dark:border-container-dark rounded-2xl shadow-xl bg-white dark:bg-card-dark w-max">
      <div className="p-4">
        <h1 className="font-bold text-2xl mb-3">{product.company}</h1>
        <h3 className="text-sm font-semibold dark:text-gray-300 text-gray-500">
          {product.owner}
        </h3>
      </div>
      <div className="relative">
        <Image
          src="/companies/Waelchi-Jakubowski.jpg"
          alt="company"
          layout="responsive"
          width={200}
          height={200}
        />
        <div className="p-4 flex justify-between items-start">
          <span className="flex flex-col text-green-600 text-2xl font-semibold w-28">
            {Number(product.price).toFixed(2) + ' €'}
            <span className="text-sm text-gray-500 dark:text-gray-300">
              {Number.parseFloat(product.price * EUR).toFixed(2) + ' Kn'}
            </span>
          </span>
          <Rating product={product} />
        </div>
      </div>
      <div className="px-4 pb-4 flex justify-between items-center">
        <span className="text-sm w-1/2 text-gray-500 dark:text-gray-300">
          {product.address}
        </span>
        <button className="bg-icons text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-blue-800 transition-all ease-linear">
          View
        </button>
      </div>
    </div>
  );
}
