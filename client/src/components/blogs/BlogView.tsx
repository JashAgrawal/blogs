"use client";
import useDebounce from "@/hooks/useDebounce";
import apiClient from "@/services";
import { methods } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface propTypes {
  propTitle?: string;
  propBody?: string;
  isDisabled?: boolean;
  blogId?: string;
}
const BlogView = ({
  propTitle,
  propBody,
  isDisabled = false,
  blogId,
}: propTypes) => {
  const [title, setTitle] = useState(propTitle || "");
  const [body, setBody] = useState(propBody || "");
  const [currentBlogId, setCurrentBlogId] = useState(blogId || "");
  const debouncedTitle = useDebounce(title);
  const debouncedBody = useDebounce(body);
  const { push } = useRouter();
  const publishBlog = async () => {
    try {
      const res = await apiClient(
        `publish-blog/${currentBlogId}`,
        methods.patch
      );
      push("/");
    } catch (err) {
      console.log(err);
      alert("err publishing blog");
    }
  };
  const addBlog = async (title: string, body: string) => {
    try {
      const payload = {
        title,
        body,
        userId: localStorage.getItem("userId"),
      };
      const res = await apiClient(`add-drafts`, methods.post, payload);
      console.log(res);
      setCurrentBlogId(res._id);
    } catch (err) {
      console.log(err);
      alert("err creating blog");
    }
  };
  const deleteBlog = async () => {
    try {
      const res = await apiClient(
        `delete-blog/${currentBlogId}`,
        methods.delete
      );
      push("/");
    } catch (err) {
      console.log(err);
      alert("err deleting blog");
    }
  };
  const updateBlog = async (title: string, body: string, blogId: string) => {
    try {
      const payload = {
        title,
        body,
      };
      const res = await apiClient(
        `edit-drafts/${blogId}`,
        methods.patch,
        payload
      );
    } catch (err) {
      console.log(err);
      alert("err creating blog");
    }
  };
  useEffect(() => {
    if (currentBlogId == "" && (debouncedTitle || debouncedBody)) {
      addBlog(debouncedTitle, debouncedBody);
    }
    if (currentBlogId && (debouncedTitle || debouncedBody)) {
      // fetch(`/api/search?q=${debouncedTitle}`)
      updateBlog(debouncedTitle, debouncedBody, currentBlogId);
      console.log("changed");
    }
  }, [debouncedTitle, debouncedBody, currentBlogId]);
  return (
    <div className="w-2/3 flex flex-col justify-center m-8 items-center space-y-8 px-8 rounded-xl bg-black">
      <input
        disabled={isDisabled}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-accent text-4xl px-8 py-4 bg-black rounded-xl focus:outline-none border-b border-gray-400"
        placeholder="Title"
      />

      <textarea
        disabled={isDisabled}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={isDisabled ? 9 : 8}
        placeholder="Type Anything . . ."
        className="w-full text-2xl bg-black px-8 py-4 focus:outline-none rounded-xl border-accent thinScroll resize-none"
      />
      <div className="w-full flex justify-end items-center">
        <button
          onClick={() => deleteBlog()}
          className="bg-black rounded-xl h-12 px-8 text-2xl py-2 text-accent"
        >
          Delete
        </button>
        {!isDisabled && (
          <button
            onClick={() => publishBlog()}
            className="bg-black rounded-xl h-12 px-8 text-2xl py-2 text-accent"
          >
            Publish
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogView;
