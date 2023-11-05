module.exports = {
  friendlyName: "Create",

  description: "This API will create an invoice record in invoice table",

  inputs: {
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
      await Invoice.create(inputs);
      return exits.success({
        status: "success",
        message: "Invoice record created successfully",
      });
    } catch (err) {
      sails.log.error(err);
      return exits.exceptionError({
        status: "error",
        message: `Error occured while creating invoice record as: ${err.message}`,
      });
    }
  },
};
