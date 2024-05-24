import Card from './Card/Card';

export default function CardLayout({ productlist }) {
  if (productlist.length > 0) {
    return (
      <div className="flex flex-row justify-start items-center py-14 gap-8 overflow-x-scroll px-10">
        {productlist.map((product, index) => {
          return <Card product={product} key={index} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="flex text-xl text-gray-500 justify-center items-center h-96">
        Sorry. No Activity at the moment!
      </div>
    );
  }
}
