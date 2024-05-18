// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'
const BlogList = props => {
  const {blogslist} = props

  return (
    <ul className="blogslist-container">
      {blogslist.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogdetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
