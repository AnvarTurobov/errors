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