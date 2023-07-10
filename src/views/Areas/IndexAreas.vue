<template>
  <TableComp
    :headers="headers"
    :rows="areas"
    :deleteItem="deleteRow"
    title="Areas"
  ></TableComp>
</template>
<script>
import TableComp from "../../components/Table.vue";

export default {
  name: "AreasView",
  components: { TableComp },
  props: [],
  mounted() {
    this.getAreas();
  },
  data() {
    return {
      areas: [],
      headers: ["name", "city_name", "created_at"],
    };
  },
  methods: {
    getAreas() {
      // .get("http://127.0.0.1:8000/api/areas")
      this.$axios
        .get(`/api/areas`)
        .then((response) => {
          console.log(response);
          this.areas = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    deleteRow(event, id) {
      //   console.log(event);
      console.log(id);
      this.$axios
        .delete(`/api/areas/${id}`)
        .then((response) => {
          console.log(response);
          this.areas = this.areas.filter((area) => area.id != id);
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); // from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
        });
    },
  },
};
</script>
