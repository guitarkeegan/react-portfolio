// Variable contains all of the project date that this is rendered on the portfolio page.
const projects = [
    {
       title: "Surpay",
       site: "https://nameless-meadow-92309.herokuapp.com/",
       repository: "https://github.com/guitarkeegan/surpay-frontend",
       description: "Take a Survey, Earn Crypto!",
      //  imgUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
       alt: "crypto currency symbols",
       expandedText: "Tested and deployed smart contract with Chai and Hardhat. front end uses NextJS and MySQL database"
    },
    {
        title: "Review Flix",
        site: "https://review-flix.herokuapp.com/",
        repository: "https://github.com/guitarkeegan/ReviewFlix-personal",
        description: "Reviews for Netflix movies",
        imgUrl: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        alt: "roll of film",
        expandedText: "App uses handlebars and cloudinary on the front end and Node, Express, MySQL, and Sequelize on the backend"
     },
     {
        title: "Social Network API",
        site: "https://loom.com/share/folder/f8aca736c21941b2a8bf25bb0ad272b0",
        repository: "https://github.com/guitarkeegan/social-network-api",
        description: "API REST routes for social network site",
        imgUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "person typing on a laptop",
        expandedText: "API uses MySQL and Sequelize to add users, thoughts, and comments"
     },
     {
        title: "Quack Planets",
        site: "https://quack-planets.vercel.app/",
        repository: "https://github.com/guitarkeegan/quack-planets",
        description: "Information about our solar system presented in a fun way.",
        imgUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
        alt: "saturn",
        expandedText: "Built with NextJS, using pure css to style planets, and postgres to store planet information."
     },
     {
        title: "Steep Dreams",
        site: "https://glacial-fortress-58935.herokuapp.com/",
        repository: "https://github.com/guitarkeegan/steep-dreams",
        description: "E-commerce site built with MERN stack",
        imgUrl: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80",
        alt: "tea",
        expandedText: "Built with MongoDB, Node, Apollo-Express, Graphql, and React."
     },
     {
        title: "Music-Tech-Blog",
        site: "https://radiant-stream-11702.herokuapp.com/",
        repository: "https://github.com/guitarkeegan/mvc-tech-blog",
        description: "A blog about music and code.",
        imgUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        alt: "musical manuscript",
        expandedText: "Fullstack app written with handlebars, Express, JavaScript, MySQL, and Sequelize."
     },
]

export default projects;
