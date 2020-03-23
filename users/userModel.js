const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  add
};

function find() {}

function findBy(filter) {}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .select("id", "username")
    .first();
}
