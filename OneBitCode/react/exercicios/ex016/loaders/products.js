import products from "../database.json";

export default function loadProduct({ params }) {
  const { productId } = params;

  const product = products.find((p) => p.id === +params.productId);

  return
}
