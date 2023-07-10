import BlogView from "@/components/blogs/BlogView";
import apiClient from "@/services";
import { methods } from "@/utils/constants";
import React from "react";

const Page = async ({ params }: { params: { blogId: string } }) => {
  const blog = await apiClient(`get-blog-by-id/${params.blogId}`, methods.get);

  return (
    <BlogView
      propTitle={blog.title}
      propBody={blog.body}
      isDisabled={!blog.isDraft}
      blogId={params.blogId}
    />
  );
};

export default Page;
