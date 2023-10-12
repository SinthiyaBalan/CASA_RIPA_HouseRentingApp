import express from "express";

const app = express();

const port = process.env.PORT || 3000

app.listen(port,()=>console.log(`Server started using nodemon`));

// mongodb+srv://Nithyadevi:<password>@cluster0.i4azy4a.mongodb.net/