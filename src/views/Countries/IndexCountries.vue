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
      headers: ["name", "created_at"],
    };
  },
  methods: {
 
    getCountries() {
     this.$axios.get("/sanctum/csrf-cookie");
      this.$axios
        .get(`/api/countries`)
        .then((response) => {
          console.log(response);
          this.countries = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    deleteRow(event, id) {
      //   console.log(event);
      console.log(id);
      axios
        .delete(`${this.$store.state.url}/countries/${id}`)
        .then((response) => {
          this.countries = this.countries.filter((c) => c.id != id);
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
