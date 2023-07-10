"use client";
import BlogList from "@/components/blogs/BlogList";
import useFetch from "@/hooks/useFetch";
import { amethods } from "@/utils/constants";
import React from "react";
const Page = () => {
  const { data, loading, error } = useFetch(
    `get-drafts/${localStorage.getItem("userId")}`,
    amethods.get
  );
  return <BlogList Heading="My Drafts ..." blogs={data} isDraft={true} />;
};

export default Page;
