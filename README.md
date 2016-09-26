A small meteor package(ES6) to display application level errors to the user

example:

```
<template name="Layout">
	<div class="container">
		{{> header}}
		{{> meteorErrors}}  // Package specific template   
		<div id="main">
			{{> yield}}
		</div>
	</div>
</template>



Errors.throw("your error message");