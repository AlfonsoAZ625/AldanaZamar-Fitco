const express = require("express");
const db = require("./db/sequelize");
const productRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");


const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/productos", productRoutes);
app.use(express.static('public'));
app.use(bodyParser.json());




app.listen(PORT, () => {
    db.authenticate().then(() =>
        console.log("Conexión a la base de datos exitosa!")
    );
    console.log(`Listening on port ${PORT}`);
})
