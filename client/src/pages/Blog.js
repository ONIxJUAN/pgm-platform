import React, { useEffect } from "react";
import Card from "../components/Card";

export default function Blog({ blogs }) {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  return (
    <div className="blogs">
      <Card type={"blog"} amount={blogs.blogs.length} data={blogs} />
    </div>
  );
}
