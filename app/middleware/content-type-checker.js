const METHODS = ["PATCH", "PUT", "POST"];
const CONTENT_TYPE = "application/json";

module.exports = function (req, res, next) {
    // verifier la methode
    const method = req.method.toUpperCase();

    // si POST, PUT, PATCH et content-type == a "application/json"
    // Alors next
    // sinnon error 400 avec message

    if (METHODS.includes(method)) {

        if (req.headers["content-type"] !== CONTENT_TYPE) {

            res.status(400).json({
                message: "Expected application/json content-type."
            });
            return;
        }
    }
    // tout est bon
    next();
}