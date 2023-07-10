"use client";
import { amethods, methods } from "@/utils/constants";
import BlogList from "@/components/blogs/BlogList";
import { Suspense, useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import apiClient from "@/services";
export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      apiClient(`create-user`, methods.post, { name: "You" })
        .then((res: any) => localStorage.setItem("userId", res._id))
        .catch((err) => {
          alert("error creating user");
        });
    }
  }, []);
  const { data, loading, error } = useFetch("get-blogs", amethods.get);
  // const blogs = await apiClient();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogList blogs={data} Heading="All Blogs ..." isDraft={false} />
    </Suspense>
  );
}
