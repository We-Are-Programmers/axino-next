"use client";

import Link from "next/link";
import { useState } from "react";
import { cartItems as initialItems } from "@/lib/data/shop";

export function CartTable() {
  const [items, setItems] = useState(initialItems);

  const updateQty = (index: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section>
      <div className="container pt-120 pb-100">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th />
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={item.productSlug} className="cart_item">
                        <td className="product-remove">
                          <button type="button" className="remove border-0 bg-transparent" onClick={() => removeItem(index)} aria-label="Remove">
                            ×
                          </button>
                        </td>
                        <td className="product-thumbnail">
                          <Link href={`/shop/${item.productSlug}`}>
                            <img alt="product" src={item.image} />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href={`/shop/${item.productSlug}`}>{item.name}</Link>
                          <ul className="variation">
                            <li className="variation-size">
                              Size: <span>{item.size}</span>
                            </li>
                          </ul>
                        </td>
                        <td className="product-price">
                          <span className="amount">${item.price.toFixed(2)}</span>
                        </td>
                        <td className="product-quantity">
                          <div className="product-details__quantity">
                            <div className="quantity-box">
                              <button type="button" className="sub" onClick={() => updateQty(index, -1)}>
                                <i className="fa fa-minus" />
                              </button>
                              <input type="number" readOnly value={item.qty} />
                              <button type="button" className="add" onClick={() => updateQty(index, 1)}>
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">${(item.price * item.qty).toFixed(2)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
