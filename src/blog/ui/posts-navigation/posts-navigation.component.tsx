import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import { SitePageContext } from "../../../../graphql-types"

export const PostsNavigation: FunctionComponent<SitePageContext> = ({
  next,
  previous,
}) => {
  return (
    <>
      <hr />
      <ul className="flex flex-wrap justify-between list-none p-0 m-0">
        <li>
          {previous && previous.fields && previous.frontmatter && (
            <Link to={"/blog" + previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && next.fields && next.frontmatter && (
            <Link to={"/blog" + next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </>
  )
}
