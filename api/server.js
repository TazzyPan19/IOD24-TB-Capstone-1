require("dotenv").config();
const cors = require('cors'); 
const express = require('express'); 
const swaggerUi = require('swagger-ui-express'); // SwaggerUI 
let dbConnect = require("./dbConnect"); // Database Connection
const app = express();

// ------------------------------------------------------------------------- //

app.use(cors()); // Enables CORS for all origins

app.use(express.json());

swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to The Pet Ranch REST API." });
});

// ------------------------------------------------------------------------- //

let petRoutes = require("./routes/petRoutes");
let userRoutes = require("./routes/userRoutes");
let orderRoutes = require("./routes/orderRoutes");

app.use("/api/pets", petRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
    
// ------------------------------------------------------------------------- //

const PORT = process.env.PORT || 8082; 

app.listen(PORT, () => {
    console.log(`Caution! CORS-enabled server running on: http://localhost:${PORT}`);
});

// NOTE - Terminate running ports Ctrl + C on node.js web-servers
// NOTE - Warning! CORS-enabled server 