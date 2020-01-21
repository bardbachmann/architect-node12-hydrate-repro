// learn more about HTTP functions here: https://arc.codes/primitives/http
const text = require("@architect/shared/text");

exports.handler = async function http(req) {
  return {
    headers: { "content-type": "application/json; charset=utf8" },
    body: JSON.stringify(text, null, 2)
  };
};
