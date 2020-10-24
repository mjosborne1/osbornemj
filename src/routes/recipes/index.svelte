<script>
  // import the list of recipes
  import {recipes} from '../../recipes'
</script>



<svelte:head>
  <title>Family Recipes</title>
</svelte:head>

<div class="row">
  <div class="sm-4 col"></div>
</div>

<h1> <span class="badge">Family Recipes</span> </h1>

<!-- iterate through each post -->
{#each recipes as recipe}
    <!-- link article to /posts/$permalink -->   
    <div class="card">
      <div class="card-body">
        <a href={`/recipes/${recipe.permalink}`}>
          <h4 class="card-title">{recipe.title}</h4>      
        </a>
        <h5 class="card-subtitle">{recipe.summary}</h5>
      </div>
    </div>
{/each}


