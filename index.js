const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

const db = require('./models');

// Routers
const userRouter = require('./routes/Global');
app.use("/", userRouter);



db.sequelize.sync().then(() => {
    app.listen(80, () => {
        console.log("Server running on port 80");
    });
});