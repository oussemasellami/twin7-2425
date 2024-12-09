const yup = require("yup");
async function validate(req, res, next) {
  try {
    const Schema = yup.object().shape({
      username: yup
        .string()
        .matches(/^[A-Z][a-z]/)
        .required(),
      email: yup
        .string()
        .email()
        .required()
        .matches(/^[a-zA-Z0-9._%+-]+@esprit\.tn$/, "end with esprit.tn"),
      cin: yup.number().required(),
    });
    await Schema.validate(req.body);
    next();
    return res.status(200).send("valid");
  } catch (err) {
    return res.status(200).json(err);
  }
}

async function validateproduct(req, res, next) {
  try {
    const Schema = yup.object().shape({
      name: yup
        .string()
        .matches(/^[A-Z][a-z]/)
        .required(),
      description: yup.string().required(),
      price: yup.number().required(),
      status: yup.boolean().oneOf(true).required(),
    });
    await Schema.validate(req.body);
    next();
    return res.status(200).send("valid");
  } catch (err) {
    return res.status(200).json(err);
  }
}

module.exports = { validate, validateproduct };
