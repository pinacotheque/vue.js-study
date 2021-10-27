Vue.js study notes. Taken from: https://www.udemy.com/course/vuejs-2-the-complete-guide/

### Friday

Introduction

data-methods
Vue.createApp({
data: function( ) { } ——> data( ) { }

})

app.mount('id')

interpolation

{{ you can add basic js expressions }}

v-bind :   

this.dataName

v-html

for event listeners → v-on:click

event binding

`<button v-on:click="counter++"> ADD </button>` 

passing with functions

e.target.value
setName($event, 'Guneri')
dom interaction, data binding - Event Handling - advanced reactivity
' computed '
watch
v-on  → @
v-bind:value →  :value
:style={borderColor: 'red'}
## Saturday
### v-if  v-else v-show v-for
v-show hides and shows the element with css. v-if just removes the element
v-for = "(goal, index )"
v-for can loop objects also.
Note: cross-side security attack
javascript proxy
check Refs again!!! 
Components
unidirectional data flow

## Monday

:is-favorite="true"  → burda sadece string girebiliyoruz component içinde. o yüzden v-bind yapmak gerekiyor.

emit events to parent element

why in app.vue props should be kebab-case

## Tuesday

provide-inject method

parent → child : props 

child to parent : $emit
