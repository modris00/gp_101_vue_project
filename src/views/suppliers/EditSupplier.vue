<template>
  <div>test edit</div>
</template>
<script>
export default {
  name: "EditSupplierView",
  methods: {
    updateItem(event, id) {
      axios
        .put(`${this.$store.state.url}/suppliers/${id}/edit`)
        .then((response) => {})
        .catch((error) => {});
    },
  },
};
</script>
