A small and responsive meteor package(ES6) to display application level errors to the users.



example:

```
<template name="Layout">
	<div class="container">
		{{> header}}
		{{> appErrors}}  // Package specific template   
		<div id="main">
			{{> yield}}
		</div>
	</div>
</template>



Errors.throw("your error message");