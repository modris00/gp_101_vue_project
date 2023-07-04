<template>
  <TableComp
    :headers="headers"
    :rows="suppliers"
    :deleteItem="deleteRow"
    title="Suppliers"
  ></TableComp>
</template>
<script>
import axios from "axios";
import TableComp from "../../components/Table.vue";

export default {
  name: "SuppliersView",
  components: { TableComp },
  props: [],
  mounted() {
    this.getSuppliers();
  },
  data() {
    return {
      suppliers: [],
      headers: ["name", "phone", "address", "created_at"],
    };
  },
  methods: {
    getSuppliers() {
      axios
        .get(`${this.$store.state.url}/suppliers`)
        .then((response) => {
          console.log(response);
          this.suppliers = response.data.data;
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
        .delete(`${this.$store.state.url}/suppliers/${id}`)
        .then((response) => {
          this.suppliers = this.suppliers.filter((s) => s.id != id);
          console.log(response);
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
