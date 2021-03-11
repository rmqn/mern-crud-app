const mongoose = require("mongoose");

mongoose
    .connect(
        process.env.MONGODB_URI || "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.rmmou.mongodb.net/CRUD-hook",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
