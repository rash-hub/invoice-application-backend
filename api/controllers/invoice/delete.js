module.exports = {
  friendlyName: "Delete",

  description:
    "This API will delete the given invoice record from invoice table",

  inputs: {
    id: {
      type: "string",
      required: true,
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
      await Invoice.destroyOne({ id: inputs.id });
      return exits.success({
        status: "success",
        message: "Invoice record deleted successfully",
      });
    } catch (err) {
      sails.log.error(err);
      return exits.exceptionError({
        status: "error",
        message: `Error occured while deleting invoice records as: ${err.message}`,
      });
    }
  },
};
