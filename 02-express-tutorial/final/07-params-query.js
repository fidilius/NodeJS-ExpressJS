const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.status(200).json(newProduct);
});

app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find((product) => {
    return product.id === Number(req.params.id);
  });

  if (!singleProduct) {
    return res.status(404).send("product doesn't exist!");
  }
  res.status(200).json(singleProduct);
});

app.get("/api/products/:id/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProduct = [...products];

  // filter product's name by search query
  if (search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  // limit the products by slicing products array
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }

  // if no product matched
  if (sortedProduct.length < 1) {
    // return res.status(200).send('no product matched your search')
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProduct);
});

app.listen(5000, () => {
  console.log("listening on port 5000....");
});
