<template>
  <TableComp :headers="headers" :rows="subCategories" :deleteItem="deleteRow" title="Sub-Categories"></TableComp>
</template>

<script>
import axios from 'axios';
import TableComp from "../../components/Table.vue";

export default {
  components: {
    TableComp
  },
  mounted() {
    this.indexCategories();
  },
  name: "IndexSubCategory",
  data() {
    return {
      subCategories: [],
      headers: ["id", "name", "description","category_id"],
    }
  },
  methods: {
    indexCategories() {
      axios.get(`${this.$store.state.url}/sub-categories`).then((response) => {
        this.subCategories = response.data.data;
        console.log(response.data.data)
      }).catch((error) => {

        console.log(error)
      })
    },
    deleteRow(event, id) {
      axios.delete(`${this.$store.state.url}/sub-categories/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.subCategories = this.subCategories.filter((item) => item.id != id);
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
        })
    },
  }
}
</script>
