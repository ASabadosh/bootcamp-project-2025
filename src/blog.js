var Blogs = [
    {
        title: "blog1",
        date: "10/15/25",
        description: "this is my description",
        image: "apple.jpeg",
        imageAlt: "desciption of image",
        slug: "slug"
    },
    {
        title: "blog2",
        date: "10/15/25",
        description: "this is my description",
        image: "me.jpg",
        imageAlt: "desciption of image2",
        slug: "slug2"
    },
];
var blogContainer = document.getElementById('blog-container');
Blogs.forEach(function (blog) {
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    // Logic for creating and appending blog elements...
    var newDiv = document.createElement("div");
    var title = document.createElement("h1");
    var description = document.createElement("p");
    newDiv.append(title);
    newDiv.append(description);
    newDiv.append(image);
    blogContainer.append(newDiv);
});
