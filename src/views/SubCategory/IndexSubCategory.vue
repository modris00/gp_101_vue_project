<template>
  <TableComp
    :headers="headers"
    :rows="subCategories"
    :deleteItem="deleteRow"
    title="Sub-Categories"
  ></TableComp>
</template>

<script>
import TableComp from "../../components/Table.vue";

export default {
  components: {
    TableComp,
  },
  mounted() {
    this.indexSubCategories();
  },
  name: "IndexSubCategory",
  data() {
    return {
      subCategories: [],
      headers: ["id", "name", "description", "category_name"],
    };
  },
  methods: {
    indexSubCategories() {
      this.$axios
        .get(`/api/sub-categories`)
        .then((response) => {
          this.subCategories = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      this.$axios
        .delete(`/api/sub-categories/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.subCategories = this.subCategories.filter(
            (item) => item.id != id
          );
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
