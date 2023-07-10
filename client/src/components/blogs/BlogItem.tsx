import { Iblogs } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const BlogItem = ({
  blog,
  isDraft = false,
}: {
  blog: Iblogs;
  isDraft: boolean;
}) => {
  return (
    <Link href={`/BlogDetails/${blog._id}`} className="blogListImage w-full">
      <div
        key={blog._id}
        className="flex blogItemGrad  shrink-0 flex-col justify-center items-center h-40 w-full text-white px-12 space-y-4"
      >
        <h1 className="text-4xl font-extrabold border-b border-accent px-4 p-2 w-full ">
          {blog.title}
        </h1>
        <div className="w-full text-xl px-4"> {blog.body.slice(0, 30)}</div>
        <div className="w-full flex flex-row-reverse">
          {/* <span className="text-accent font-bold text-md">
            By - {blog.author}
          </span> */}
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
