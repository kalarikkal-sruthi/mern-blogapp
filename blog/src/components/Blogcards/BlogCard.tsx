import React from "react";

interface Category {
  name: string;
  path: string;
  bgcolor: string;
}
function BlogCard(data: Category) {
  const { name, path, bgcolor } = data;

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        background: bgcolor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{
        fontSize:'24px',
        color:'white'
      }}>{name}</p>
    </div>
  );
}

export default BlogCard;
