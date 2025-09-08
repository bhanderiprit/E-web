import { ShoppingCart } from "lucide-react";

function CartButton({cart}) {
  return (
    <button className="flex items-center gap-2 p-2 rounded-2xl bg-blue-500 text-white shadow-md hover:bg-blue-600">
      <ShoppingCart size={20} />
      <span>{cart}</span>
    </button>
  );
}

export default CartButton;
