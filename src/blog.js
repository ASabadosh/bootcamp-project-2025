"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Blogs = [
    {
        title: "The sport of baseball",
        date: "10/15/25",
        description: "Learn about the history of baseball!",
        image: "baseball.jpeg",
        imageAlt: "image of baseball",
        slug: "baseball.html"
    },
    {
        title: "The sport of surfing",
        date: "10/15/25",
        description: "Learn about the history of surfing",
        image: "surfing.jpg",
        imageAlt: "person riding wave on surfboard",
        slug: "surfing.html"
    },
];
const blogContainer = document.getElementById('blog-container');
Blogs.forEach((blog) => {
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    // Logic for creating and appending blog elements...
    const newDiv = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = blog.title;
    const description = document.createElement("p");
    description.textContent = blog.description;
    const date = document.createElement("p");
    date.textContent = blog.date;
    newDiv.append(title);
    newDiv.append(date);
    newDiv.append(description);
    newDiv.append(image);
    blogContainer.append(newDiv);
});
//# sourceMappingURL=blog.js.map