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
        image: "surfing.jpeg",
        imageAlt: "person riding wave on surfboard",
        slug: "surfing.html"
    },
]