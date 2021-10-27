<template>
    <section>
        <h2>Name: {{name}}</h2>
        <h3>Age: {{age}}</h3>
    </section>
</template>




<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },

    }
}
</script>