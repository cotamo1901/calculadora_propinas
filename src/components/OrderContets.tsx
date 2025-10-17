import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  RemoveItem: (id: MenuItem["id"]) => void;
};
export const OrderContets = ({ order, removeItem }) => {
  return (
    <>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex  justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
