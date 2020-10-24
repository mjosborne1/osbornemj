<script>
  // import the list of blogs
  import {blogs} from '../../blogs'
</script>



<svelte:head>
  <title>Family blogs</title>
</svelte:head>

<div class="row">
  <div class="sm-4 col"></div>
</div>
<div class="row">
  <div class="sm-4 col"></div>
</div>

<!-- iterate through each post -->
{#each blogs as blog}
  <article>
    <!-- link article to /posts/$permalink -->   
    <a href={`/blogs/${blog.permalink}`}>
      <h2>{blog.title}</h2>      
    </a>
    <p>{blog.summary}</p>
  </article>
{/each}


