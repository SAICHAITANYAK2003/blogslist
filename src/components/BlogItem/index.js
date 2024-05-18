// Write your JS code here

const BlogItem = props => {
  const {blogdetails} = props
  const {title, description, publishedDate} = blogdetails

  return (
    <li className="blog-item">
      <h1 className="blog-item-heading">{title}</h1>
      <p className="blog-item-text">{description}</p>
      <p className="blog-item-date">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
