<script>
  // import the list of recipes
  import {recipes} from '../recipes'
</script>



<svelte:head>
  <title>Family Recipes</title>
</svelte:head>

<h1>Family Recipes </h1>


<!-- iterate through each post -->
{#each recipes as recipe}
  <article>
    <!-- link article to /posts/$permalink -->   
    <a href={`/recipes/${recipe.permalink}`}>
      <h2>{recipe.title}</h2>      
    </a>
    <p>{recipe.summary}</p>
  </article>
{/each}


