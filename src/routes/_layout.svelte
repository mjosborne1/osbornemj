<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style>
  main {
		position: sticky;
		max-width: 90%;
		padding: 1rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	@media(max-width: 576px){
		main{
			max-width: 95%;
		}
	}
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>
<hr>
<Footer/>
