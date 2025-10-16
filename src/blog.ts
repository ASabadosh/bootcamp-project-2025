type Blog = {
  title: string 
  date: string;
  description: string
  image: string
  imageAlt: string
  slug: string 
};

const Blogs: Blog[] = [
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
]

const blogContainer = document.getElementById('blog-container');
Blogs.forEach((blog) => {
	const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;
	// Logic for creating and appending blog elements...
    const newDiv = document.createElement("div");
    const title = document.createElement("h1");
    const description = document.createElement("p");
    newDiv.append(title)
    newDiv.append(description)
    newDiv.append(image)
    blogContainer.append(newDiv)
});
