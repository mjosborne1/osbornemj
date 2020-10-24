<script>
	export let segment;
</script>

<style>
	
</style>


<nav class="border fixed split-nav">
  <div class="nav-brand">
    <h3><a class='{segment === undefined ? "selected" : ""} title' href='.'>Mike Osborne</a></h3>
  </div>
  <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible1">
    <label for="collapsible1">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </label>
    <div class="collapsible-body">
      <ul class="inline">        
        <li><a class='{segment === undefined ? "selected" : ""} title' href='/'>Home</a></li>
        <li><a rel=prefetch class='{segment === "recipes" ? "selected" : ""}' href='recipes'>Recipes</a></li>
        <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blogs'>Blog</a></li>
        <li><a href="https://github.com/mjosborne1" target="_blank">Github</a></li>
      </ul>
    </div>
  </div>
</nav>