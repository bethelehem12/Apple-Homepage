//Question 1:
//import
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

const PORT = 1234;
//middleware to enable cross-orgin resource sharing
app.use(cors());

//middle ware
app.use(
  express.urlencoded({
    extended: true,
  })
);
//
app.use(express.json());

//connection between Node and the MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "DBtest",
  database: "mydb",
});
//Connect mySQL:
db.connect((err) => {
  if (err) {
    console.log("DB unable to connect: ", err.message); //error msg
  } else {
    console.log("Successfully connected to MySQL DB"); //success msg
  }
});

app.get("/", (req, res) => {
  res.send("Up and running");
});
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

//Question 2:
//create table
// app.get("/install", (req, res) => {
//   // SQL query to create "Products" table
//   let products = `CREATE TABLE IF NOT EXISTS Products (
//   product_id INT AUTO_INCREMENT, 
//     product_url VARCHAR(255) NOT NULL,
//     product_name VARCHAR(255) NOT NULL,
//     PRIMARY KEY (product_id)
//     )`;

//   // SQL query to create "Product Description" table
//   let prodDescription = `CREATE TABLE IF NOT EXISTS ProductDescription (
//         description_id INT AUTO_INCREMENT,
//         product_id INT(11) NOT NULL,
//         product_brief_description TEXT NOT NULL,
//         product_description TEXT NOT NULL,
//         product_img VARCHAR(255) NOT NULL,
//         product_link VARCHAR(255) NOT NULL,
//         PRIMARY KEY (description_id),
//         FOREIGN KEY (product_id) REFERENCES Products (product_id)
//     )`;

//   // SQL query to create 'Product Price' table
//   let prodPrice = `CREATE TABLE IF NOT EXISTS ProductPrice(
//         price_id INT AUTO_INCREMENT,
//         product_id INT(11) NOT NULL,
//         starting_price VARCHAR(255) NOT NULL,
//         price_range VARCHAR(255) NOT NULL,
//         PRIMARY KEY (price_id),
//         FOREIGN KEY (product_id) REFERENCES Products (product_id)
//     )`;

//   // SQL query to create 'User' table
//   let prodUser = `CREATE TABLE IF NOT EXISTS User(
//         user_id INT AUTO_INCREMENT,
//         user_name VARCHAR(255) NOT NULL,
//         user_password VARCHAR(255) NOT NULL,
//         PRIMARY KEY (user_id)
//     )`;

//   // SQL query to create 'Orders' table
//   let prodOrders = `CREATE TABLE IF NOT EXISTS Orders (
//         order_id INT AUTO_INCREMENT,
//         product_id INT(11) NOT NULL,
//         user_id INT(11) NOT NULL,
//         PRIMARY KEY (order_id),
//         FOREIGN KEY (product_id) REFERENCES Products (product_id),
//         FOREIGN KEY (user_id) REFERENCES User (user_id)
//     )`;

//   db.query(products, (err) => {
//     if (err) console.log(err);
//   });
//   db.query(prodDescription, (err) => {
//     if (err) console.log(err);
//   });
//   db.query(prodPrice, (err) => {
//     if (err) console.log(err);
//   });
//   db.query(prodUser, (err) => {
//     if (err) console.log(err);
//   });
//   db.query(prodOrders, (err) => {
//     if (err) console.log(err);
//   });
//   res.send("✅Table created");
// });

//Question 3:
// app.post("/iphones", (req, res) => {
//   console.log(req.body);
//   //
//   const {
//     product_name,
//     product_url,
//     product_brief_description,
//     product_description,
//     product_img,
//     product_link,
//     starting_price,
//     price_range,
//     user_name,
//     user_password,
//   } = req.body;

//   let insertProduct =
//     "INSERT INTO Products (product_name, product_url) VALUES (?, ?)";
//   let insertProdDescription =
//     "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)";
//   let insertProdPrice =
//     "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)";
//   let insertUser = "INSERT INTO User (user_name, user_password) VALUES (?, ?);";
//   let insertOrder = "INSERT INTO Orders (product_id, user_id) VALUES (?, ?);";

//   //product
//   db.query(
//     insertProduct,
//     [product_name, product_url],
//     (err, result, fields) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).send("Error inserting product into mydb");
//       }
//       const product_id = result.insertId;

//       //Insert ProductDescription
//       db.query(
//         insertProdDescription,
//         [
//           product_id,
//           product_brief_description,
//           product_description,
//           product_img,
//           product_link,
//         ],
//         (err) => {
//           if (err) console.log(err);
//         }
//       );

//       // Insert ProductPrice
//       db.query(
//         insertProdPrice,
//         [product_id, starting_price, price_range],
//         (err) => {
//           if (err) console.log(err);
//         }
//       );

//       //Insert User
//       db.query(insertUser, [user_name, user_password], (err, result) => {
//         if (err) {
//           console.log(err);
//           return res.status(500).send("Error inserting data.");
//         }
//         const user_id = result.insertId;

//         // Insert Orders
//         db.query(insertOrder, [product_id, user_id], (err) => {
//           if (err) console.log(err);
//         });
//       });

//       res.send("All data inserted successfully.");
//     }
//   );
// });


//Get request:
// app.get("/addiphones", (req, res) => {
//   let Products = `SELECT * FROM customers JOIN address JOIN company ON customers.customer_id = address.customer_id AND customers.customer_id = company.customer_id`;

//   db.query(customers, (err, field) => {
//     if (err) console.log(err);
//     res.send("Testing the GET request.");
//   });
// });


// app.get("/iphones", (req, res) => {
//   const query = `
//     SELECT 
//       Products.product_id,
//       Products.product_name,
//       Products.product_url,
//       ProductDescription.product_brief_description,
//       ProductDescription.product_description,
//       ProductDescription.product_img,
//       ProductDescription.product_link,
//       ProductPrice.starting_price,
//       ProductPrice.price_range,
//       User.user_name,
//       Orders.order_id
//     FROM Products
//     JOIN ProductDescription ON Products.product_id = ProductDescription.product_id
//     JOIN ProductPrice ON Products.product_id = ProductPrice.product_id
//     JOIN Orders ON Products.product_id = Orders.product_id
//     JOIN User ON Orders.user_id = User.user_id
//   `;

//   db.query(query, (err, results) => {
//     if (err) {
//       console.log("Error retrieving iPhone data:", err);
//       res.status(500).send("Failed to retrieve iPhone data.");
//     } else {
//       res.json(results);
//     }
//   });
// });


//DELETE Request for Postman:
// app.delete("/addiphones/:id", (req, res) => {
//   const productId = req.params.id;

//  //Delete from Orders 
//   const deleteOrders = `DELETE FROM Orders WHERE product_id = '${21}'`;

//   //Delete from ProductDescription
//   const deleteDescription = `DELETE FROM ProductDescription WHERE product_id = '${21}'`;

//   //Delete from ProductPrice
//   const deletePrice = `DELETE FROM ProductPrice WHERE product_id = '${21}'`;

//   //Delete from Products
//   const deleteProduct = `DELETE FROM Products WHERE product_id = '${21}'`;

//   //
//   db.query(deleteOrders, [productId], (err) => {
//     if (err) {
//       console.log("Error: Orders:", err);
//       return res.status(500).send("Failed to delete from Orders.");
//     }

//     db.query(deleteDescription, [productId], (err) => {
//       if (err) {
//         console.log("Error: ProductDescription:", err);
//         return res.status(500).send("Failed to delete description.");
//       }

//       db.query(deletePrice, [productId], (err) => {
//         if (err) {
//           console.log("Error: ProductPrice:", err);
//           return res.status(500).send("Failed to delete price.");
//         }

//         db.query(deleteProduct, [productId], (err) => {
//           if (err) {
//             console.log("Error: Products:", err);
//             return res.status(500).send("Failed to delete product.");
//           }

//           res.send(`Product with ID ${productId} and related data deleted.`);
//         });
//       });
//     });
//   });
// });

//We
app.get("/iphones", (req, res) => {
  db.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      console.log(rows);
      let iphones = { products: rows };
      // iphones.products = rows;
      console.log(iphones);
      var stringIphones = JSON.stringify(iphones);
      console.log(stringIphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});

// Single Iphone product
app.get("/iphones/:id", (req, res) => {
  const phoneId = req.params.id;
  const query = `
    SELECT * FROM Products
    JOIN ProductDescription ON Products.product_id = ProductDescription.product_id
    JOIN ProductPrice ON Products.product_id = ProductPrice.product_id
    WHERE Products.product_id = ?
  `;

  db.query(query, [phoneId], (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      res.status(500).send("Internal Server Error");
    } else if (rows.length === 0) {
      //no data retrun 404
      res.status(404).send("Product not found");
    } else {
      const phone = rows[0];
      res.json(phone);
    }
  });
});


app.listen(1234, () => {
  console.log("Server is running on http://localhost:1234"); // 
});





























































































































// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//   const query =
//     "INSERT INTO Products (product_name, product_url) VALUES (?, ?)";
//   db.query(query, [product_name, product_url], (err, result) => {
//     if (err) {
//       console.error("Insert failed:", err);
//       res.status(500).send("Error inserting data");
//     } else {
//       console.log("Product inserted:", result);
//       res.send("Product is added successfully!");
//     }
//   });

// app.post("/addiphones", (req, res) => {
//   const {
//     product_name,
//     product_url,
//     brief_description,
//     product_description,
//     product_img,
//     product_link,
//     starting_price,
//     price_range,
//     user_name,
//     user_password,
//   } = req.body;

//   // 1. Insert into Products
//   const productQuery =
//     "INSERT INTO Products (product_name, product_url) VALUES (?, ?)";
//   db.query(productQuery, [product_name, product_url], (err, productResult) => {
//     if (err) {
//       console.error("Product insert failed:", err);
//       return res.status(500).send("Error inserting product");
//     }

//     const productId = productResult.insertId;

//     // 2. Insert into ProductDescription
//     const descQuery = `INSERT INTO ProductDescription
//       (product_id, product_brief_description, product_description, product_img, product_link)
//       VALUES (?, ?, ?, ?, ?)`;
//     db.query(
//       descQuery,
//       [
//         productId,
//         brief_description,
//         product_description,
//         product_img,
//         product_link,
//       ],
//       (err) => {
//         if (err) {
//           console.error("Description insert failed:", err);
//           return res.status(500).send("Error inserting description");
//         }

//         // 3. Insert into ProductPrice
//         const priceQuery = `INSERT INTO ProductPrice
//         (product_id, starting_price, price_range)
//         VALUES (?, ?, ?)`;
//         db.query(
//           priceQuery,
//           [productId, starting_price, price_range],
//           (err) => {
//             if (err) {
//               console.error("Price insert failed:", err);
//               return res.status(500).send("Error inserting price");
//             }

//             // 4. Insert into User (or find existing)
//             const userQuery = `INSERT INTO User (user_name, user_password) VALUES (?, ?)`;
//             db.query(
//               userQuery,
//               [user_name, user_password],
//               (err, userResult) => {
//                 if (err) {
//                   console.error("User insert failed:", err);
//                   return res.status(500).send("Error inserting user");
//                 }

//                 const userId = userResult.insertId;

//                 // 5. Insert into Orders
//                 const orderQuery = `INSERT INTO Orders (product_id, user_id) VALUES (?, ?)`;
//                 db.query(orderQuery, [productId, userId], (err) => {
//                   if (err) {
//                     console.error("Order insert failed:", err);
//                     return res.status(500).send("Error inserting order");
//                   }

//                   res.send(
//                     "✅ Product and all related data inserted successfully!"
//                   );
//                 });
//               }
//             );
//           }
//         );
//       }
//     );
//   });
// });
