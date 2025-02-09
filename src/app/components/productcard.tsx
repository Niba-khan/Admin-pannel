import Image from "next/image";

const ProductCard = ({ product }: { product: { title: string; price: string; image: string } })  => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-48">
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className="mb-2 w-96"
      />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p>Price: Rs. {product.price}</p>
    </div>
  );
};

export default ProductCard;
