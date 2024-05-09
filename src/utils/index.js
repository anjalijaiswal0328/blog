import { faker } from "@faker-js/faker";

export const generateBlogs = function (numberOfBlogs) {
  const blogs = [];

  for (let i = 1; i <= numberOfBlogs; i++) {
    blogs.push({
      id: faker.lorem.slug(),
      title: faker.lorem.words(3),
      descrription: faker.lorem.paragraphs(3),
      avatar: faker.image.avatar(),
      image: faker.image.urlPlaceholder(),
      tags: ["Hello", "World"],
    });
  }

  return blogs;
};
