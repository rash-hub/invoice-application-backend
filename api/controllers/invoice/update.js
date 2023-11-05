module.exports = {
  friendlyName: "Update",

  description:
    "This API will update the given invoice record from invoice table",

  inputs: {
    id: {
      type: "string",
      required: true,
    },
    costPrice: {
      required: true,
      type: "string",
    },
    discount: {
      required: true,
      type: "string",
    },
    discountPercent: {
      required: true,
      type: "string",
    },
    margin: {
      required: true,
      type: "string",
    },
    marginPercent: {
      required: true,
      type: "string",
    },
    qty: {
      required: true,
      type: "string",
    },
    salesPrice: {
      required: true,
      type: "string",
    },
    taxPercent: {
      required: true,
      type: "string",
    },
    tax: {
      required: true,
      type: "string",
    },
    totalSalesPrice: {
      required: true,
      type: "string",
    },
    finalSalesPrice: {
      required: true,
      type: "string",
    },
  },

  exits: {
    exceptionError: {
      statusCode: 500,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    try {
      let payload = {
        costPrice: inputs.costPrice,
        discount: inputs.discount,
        discountPercent: inputs.discountPercent,
        margin: inputs.margin,
        marginPercent: inputs.marginPercent,
        qty: inputs.qty,
        salesPrice: inputs.salesPrice,
        taxPercent: inputs.taxPercent,
        tax: inputs.tax,
        totalSalesPrice: inputs.totalSalesPrice,
        finalSalesPrice: inputs.finalSalesPrice,
      };
      await Invoice.updateOne({ id: inputs.id }, payload);
      return exits.success({
        status: "success",
        message: "Invoice record updated successfully",
      });
    } catch (err) {
      sails.log.error(err);
      return exits.exceptionError({
        status: "error",
        message: `Error occured while updating invoice records as: ${err.message}`,
      });
    }
  },
};
