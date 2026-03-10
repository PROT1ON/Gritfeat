const express = require("express")
const app = express();
const port = 3000;

const todoRoutes = require("./router/v1/routes/index");
app.use(express.json());
app.use("/api/v1", todoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

