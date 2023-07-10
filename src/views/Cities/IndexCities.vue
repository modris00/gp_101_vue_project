<template>
  <TableComp
    :headers="headers"
    :rows="cities"
    :deleteItem="deleteRow"
    title="Cities"
  ></TableComp>
</template>
<script>
import TableComp from "../../components/Table.vue";

export default {
  name: "CitiesView",
  components: { TableComp },
  props: [],
  mounted() {
    this.getCities();
  },
  data() {
    return {
      cities: [],
      headers: ["name", "country_name", "created_at"],
    };
  },
  methods: {
    getCities() {
      this.$axios
        .get(`/api/cities`)
        .then((response) => {
          console.log(response);
          this.cities = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from this.$axios not laravel
        });
    },
    deleteRow(event, id) {
      //   console.log(event);
      console.log(id);
      this.$axios
        .delete(`/api/cities/${id}`)
        .then((response) => {
          console.log(response);
          this.cities = this.cities.filter((c) => c.id != id);
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); // from laravel
          } else {
            this.$toast.error(error.message); // from this.$axios
          }
        });
    },
  },
};
</script>
