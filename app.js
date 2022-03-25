const express = require('express');
require('./db/mongoose');
const paraRouter = require('./routers/para')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(paraRouter);

app.listen(port, () => console.log("server is running on port: ", port))
