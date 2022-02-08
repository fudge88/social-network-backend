const express = require("express");
const { append } = require("vary");

const PORT = process.env.PORT || 4000;

const app = express();

const init = async () => {
  app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
  );
};

init();
