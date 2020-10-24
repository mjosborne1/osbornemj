<script>
  // import the list of blogs
  import {blogs} from '../../blogs'
</script>



<svelte:head>
  <title>Michael's Blog</title>
</svelte:head>

<div class="row">
  <div class="sm-4 col"></div>
</div>
<div class="row">
  <div class="sm-4 col"></div>
</div>
<h1> <span class="badge">Michael's Blog</span> </h1>
<!-- iterate through each post -->
{#each blogs as blog}
  <article>
    <!-- link article to /posts/$permalink -->   
    <a href={`/blogs/${blog.permalink}`}>
      <h2>{blog.title}</h2>      
    </a>
    <p>{blog.summary}</p>
    <p>{blog.date}</p>
  </article>
{/each}


