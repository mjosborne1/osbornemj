<script context="module">
  // import the logic for finding a recipe based on permalink
  import {findRecipe} from '../../recipes'

  // sapper calls this to load our data
  export function preload(page) {
    // find the recipe based on the permalink param
    const recipe = findRecipe(page.params.permalink)

    // return a list of props
    return { recipe }
  }
</script>

<script>
  // this prop is filled from the result of the `preload()`
  export let recipe
</script>
<div class="row">
  <div class="sm-4 col"></div>
</div>
<ul class="breadcrumb border">
  <li><a href="recipes">Recipes</a></li>    
</ul>
<!-- display the recipe -->
<h1>{recipe.title}</h1>
<br>
{@html recipe.html}
<hr>