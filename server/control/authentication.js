import { database } from "../database.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM person WHERE email = ? OR username = ?";
  database.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Username already exists.");
    // Don't know if should implement encryption for password yet.
    const q =
      "INSERT INTO person (username, email, password, firstname, lastname, role) VALUES (?)";
    const values = [
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.firstname,
      req.body.lastname,
      "customer" // Set the user's role to "customer" by default
    ];
    database.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been successfully created.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM person WHERE username = ?";
  database.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length == 0)
      return res.status(404).json("Username does not exist.");
    if (req.body.password !== data[0].password)
      return res.status(401).json("Incorrect password.");
    const token = jwt.sign({ id: data[0].id, role: data[0].role }, "jwtkey");
    res.cookie("access_token", token, {
      httpOnly: true
    }).status(200).json(data[0]);
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("Logout successful.");
};

export const profile = (req, res) => {
  // Get the user's role from the JWT payload
  const role = req.user.role;
  // Serve the appropriate view based on the user's role
  if (role === "agent") {
    res.status(200).json("Employee profile view");
  } else {
    res.status(200).json("Customer profile view");
  }
};
