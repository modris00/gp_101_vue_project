<template>
  <TableComp
    :headers="headers"
    :rows="categories"
    :deleteItem="deleteRow"
    title="categories"
  ></TableComp>
</template>

<script>
import TableComp from "../../components/Table.vue";

export default {
  components: {
    TableComp,
  },
  mounted() {
    this.indexCategories();
  },
  name: "IndexCategory",
  data() {
    return {
      categories: [],
      headers: ["id", "name", "description"],
    };
  },
  methods: {
    indexCategories() {
      this.$axios
        .get(`/api/categories`)
        .then((response) => {
          this.categories = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      this.$axios
        .delete(`/api/categories/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.categories = this.categories.filter((item) => item.id != id);
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            if (error.response.data) {
              this.$toast.error(error.response.data.message);
            } else {
              this.$toast.error(error.message);
            }
          }
        });
    },
  },
};
</script>
