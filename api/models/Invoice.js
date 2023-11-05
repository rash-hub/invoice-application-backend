/**
 * Invoice.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    costPrice: { columnName: "cost_price", type: "number", required: true },
    discount: { columnName: "discount", type: "number", required: true },
    discountPercent: {
      columnName: "discount_percent",
      type: "number",
      required: true,
    },
    margin: { columnName: "margin", type: "number", required: true },
    marginPercent: {
      columnName: "margin_percent",
      type: "number",
      required: true,
    },
    qty: { columnName: "qty", type: "number", required: true },
    salesPrice: { columnName: "sales_price", type: "number", required: true },
    taxPercent: { columnName: "tax_percent", type: "number", required: true },
    tax: { columnName: "tax", type: "number", required: true },
    totalSalesPrice: {
      columnName: "total_sales_price",
      type: "number",
      required: true,
    },
    finalSalesPrice: {
      columnName: "final_sales_price",
      type: "number",
      required: true,
    },
  },
};
