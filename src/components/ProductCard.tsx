type ProductCardProps = {
    title: string;
    price: number;
};

function ProductCard({ title, price }: ProductCardProps) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">Price: ${price}</p>
        </div>
    );
}

export default ProductCard;