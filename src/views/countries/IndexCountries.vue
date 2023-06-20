<template>
  <TableComp
    :headers="headers"
    :rows="countries"
    :deleteItem="deleteRow"
    title="Countries"
  ></TableComp>
</template>
<script>
import axios from "axios";
import TableComp from "../../components/Table.vue";

export default {
  name: "CountriesView",
  components: { TableComp },
  props: [],
  mounted() {
    this.getCountries();
  },
  data() {
    return {
      countries: [],
      headers: ["id", "name", "created_at"],
    };
  },
  methods: {
    getCountries() {
      axios
        .get("http://127.0.0.1:8000/api/countries")
        .then((response) => {
          console.log(response);
          this.countries = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      //   console.log(event);
      console.log(id);
      axios
        .delete(`http://127.0.0.1:8000/api/countries/${id}`)
        .then((response) => {
          this.countries = this.countries.filter((c) => c.id != id);
          this.$toast.success("Successfully Deleted!");
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(error.message);
        });
    },
  },
};
</script>
