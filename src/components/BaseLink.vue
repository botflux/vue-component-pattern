<template>
  <a :href="href" v-on="$listeners">
    <slot></slot>
  </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true
        }
    }
}
</script>
