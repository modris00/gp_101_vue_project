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
      headers: ["id", "name", "phone", "address", "created_at"],
    };
  },
  methods: {
    getSuppliers() {
      axios
        .get("http://127.0.0.1:8000/api/suppliers")
        .then((response) => {
          console.log(response);
          this.suppliers = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      //   console.log(event);
      console.log(id);
      axios
        .delete(`http://127.0.0.1:8000/api/suppliers/${id}`)
        .then((response) => {
          this.suppliers = this.suppliers.filter(
            (supplier) => supplier.id != id
          );
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
