import express from "express";

const app = express();
app.use(express.json());

const courses = [];

app.get("/", (request, response) => {
  return response.status(200).json({ message: "Rentalx start" });
});

app.post("/courses", (request, response) => {
  const course = request.body;
  const { name, description } = course;
  courses.push(course);
  return response.json({ name, description });
});

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
