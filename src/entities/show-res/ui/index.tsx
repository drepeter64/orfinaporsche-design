import React from "react"
import { PostItem, TodoItem } from "@/shared/types"
import { useTranslations } from "next-intl"

export const ShowRes: React.FC<{ todo: TodoItem; post: PostItem }> = ({ todo, post }) => {
  const tHome = useTranslations("Todos")
  console.log(todo)

  return (
    <>
      <h2>{tHome("title")}</h2>
      <br />
      <div>
        <h2>
          Todo is: <span style={{ color: "pink" }}>{todo.title}</span>
        </h2>
      </div>
      <br />
      <div>
        <h2>
          Post is: <span style={{ color: "pink" }}>{post.title}</span>
        </h2>
        <p>{post.body}</p>
      </div>
    </>
  )
}
