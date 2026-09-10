require("dotenv") .config();
const mongoose = require("mongoose");
const Course = require ("./models/Course");

const sampleCourses = [
    {
        title: "Web Development",
        description: "Learn to build modern website from scratch using HTML, CSS, Javascript.",
        instructor: "Sarah Ahmed",
        duration: "8 weeks",
        level: "Beginner",
        price: 49,
        category: "Web Development",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCQ8z0aEXoHaDzam79rccBTG_K48YjSjhofORheyeFQ&s=10"
    },
    {
      title: "Javascript Essentials",
        description: "Master Javascript fundamentals: variable, function, arrays, object, and DOM.",
        instructor: "Bilal khan",
        duration: "6 weeks",
        level: "Beginner",
        price: 39,
        category: "Programming",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxkh8jzNDOrLy4nAictMKR520_g4E-u9MDfmZQKvFkg&s=10"
    },
    {
      title: "React.js for Beginners",
        description: "Build interactive user interfaces with components, props, state, and hooks.",
        instructor: "Ayesha Malik",
        duration: "3 weeks",
        level: "Beginner",
        price: 59,
        category: "Frontend",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvBRa5Jy2UYJa-OFmz2oQjm8lNiOZE6MoGE1tXE2aVg&s=10"
    },
    {
      title: "Node.js & Express",
        description: "Build powerful backend servers and REST API with Node.js and Express.",
        instructor: "Hamza Sheikh",
        duration: "5 weeks",
        level: "Intermediate",
        price: 59,
        category: "Backend",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNMxw5sbA65JABAfenbFVY8OQ8eaGi-UeQKTyFQcArg&s=10"
    },
     {
      title: "MongoDB Database",
        description: "Learn NoSQL databases, schemas, and Mongoose to store real appllication data.",
        instructor: "Fstima Noor",
        duration: "4 weeks",
        level: "Intermediate",
        price: 49,
        category: "Database",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KYyWKK1cvR0-KiBR4uM_J_x4zu9zDQpB-lc1mv-psg&s=10"
    },
     {
      title: "Full Stack Development",
        description: "Combine React, Node,js, Express, and MongoDB to build complete applications.",
        instructor: "Usman Tariq",
        duration: "10 weeks",
        level: "Advanced",
        price:  99,
        category: "Full Stack",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAGCvjuyLPyE5y3UU6LNmYuxuHLxJtqDVWMXl_l73kQ&s=10"
    },
];

mongoose
.connect(process.env.MONGO_URI)
.then(async () => {
  await Course.deleteMany();
  await Course.insertMany(sampleCourses);
  console.log("Sample courses added to MongoDB atlas");
  mongoose.connection.close();
})
   .catch((err) => console.error("Seed error:",err.message));