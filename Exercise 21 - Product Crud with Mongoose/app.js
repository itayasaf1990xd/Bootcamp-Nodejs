require('./databases/mongoose.js');
const express = require('express');
const apiRouter = require('./routes/product.route');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

app.use('/product', apiRouter);
app.listen(port, () => {
	console.log('Server is up and running on port ' + port);
});
