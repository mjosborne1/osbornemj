<script context="module">
  // import the logic for finding a blog based on permalink
  import {findBlog} from '../../blogs'

  // sapper calls this to load our data
  export function preload(page) {
    // find the blog based on the permalink param
    const blog = findBlog(page.params.permalink)

    // return a list of props
    return { blog }
  }
</script>

<script>
  // this prop is filled from the result of the `preload()`
  export let blog
</script>

<!-- display the blog -->
<div class="row">
  <div class="sm-4 col"></div>
</div>
<ul class="breadcrumb border">
  <li><a href="blogs">Blog</a></li>    
  <li>{blog.title}</li>
</ul>
<p>{blog.date}</p>
{@html blog.html}