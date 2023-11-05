module.exports = {
  friendlyName: "Fetch",

  description: "This API will fetch all invoice record from invoice table",

  inputs: {
    search: {
      type: "string",
    },
    sortColumn: {
      type: "string",
    },
    sortOrder: {
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
      let existingInvoices = await Invoice.find();
      return exits.success({
        status: "success",
        data: existingInvoices,
      });
    } catch (err) {
      sails.log.error(err);
      return exits.exceptionError({
        status: "error",
        message: `Error occured while fetching invoice records as: ${err.message}`,
      });
    }
  },
};
