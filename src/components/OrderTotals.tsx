import { useMemo } from "react";
import { formatCurrency } from "../helpers";

interface OrderTotalsProps {
  order: OrderItem[],
  tip:number,
  placeOrder: ()=> void
}

export const OrderTotals = ({ order,tip,placeOrder }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );




  const tipAmouint =useMemo(()=> subtotalAmount * tip,[tip,order])

  const orderTotall = useMemo(()=>subtotalAmount + tipAmouint,[tip,order])
  return (
    <>
      <div className="space-y-3">
        <h2 className=" font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:{""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Propina:{""}
          <span className="font-bold">{formatCurrency(tipAmouint)}</span>
        </p>

        <p>
          Total a pagar:{""}
          <span className="font-bold">{formatCurrency(orderTotall)}</span>
        </p>
      </div>

      <button onClick={placeOrder} className="w-full bg-blue-800 p-3  hover:bg-blue-400  uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={orderTotall ===0}>Guardar Orden</button>
    </>
  );
};
