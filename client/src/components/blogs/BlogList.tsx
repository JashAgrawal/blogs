import { Iblogs } from "@/utils/constants";
import React from "react";
import BlogItem from "./BlogItem";
interface propTypes {
  blogs: Iblogs[];
  Heading: string;
  isDraft?: boolean;
}
const BlogList = ({ blogs, Heading, isDraft }: propTypes) => {
  return (
    <div className="flex flex-col justify-center w-1/2 h-full pl-8 py-8 space-y-8">
      <h1 className="text-5xl">{Heading}</h1>
      <div className="flex w-full h-[80vh] flex-col items-center justify-start space-y-4 text-black overflow-x-hidden overflow-y-auto noScroll">
        {blogs &&
          blogs.map((blog: Iblogs, idx: number) => (
            <BlogItem key={idx} blog={blog} isDraft={isDraft || false} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
