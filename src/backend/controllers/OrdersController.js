import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * This handler handles getting items to user's order.
 * send GET Request at /api/user/orders
 * */
export const getOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const orders = schema.users.findBy({ _id: userId }).orders;
  return new Response(200, {}, { orders: orders });
};

/**
 * This handler handles adding an order to user's orders.
 * send POST Request at /api/user/orders
 * body contains { items }
 * */

export const newOrderHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userOrders = schema.users.findBy({ _id: userId }).orders;
    const { order } = JSON.parse(request.requestBody);
    userOrders.push({
      _id: uuid(),
      paymentId: order.paymentId,
      items: order.items,
      amount: order.amount,
      //   address: order.address,
      createdAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { orders: userOrders, cart: [] });
    console.log("from db", userOrders);
    return new Response(201, {}, { orders: userOrders });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
