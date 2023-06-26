<template>
  <TableComp
    :headers="headers"
    :rows="beneficiaries"
    :deleteItem="deleteRow"
    title="Beneficiaries"
  ></TableComp>
</template>
<script>
import axios from "axios";
import TableComp from "../../components/Table.vue";

export default {
  name: "BeneficiariesView",
  components: { TableComp },
  props: [],
  mounted() {
    this.getBeneficiaries();
  },
  data() {
    return {
      beneficiaries: [],
      headers: ["name", "age", "gender", "area_id", "email", "username"],
    };
  },
  methods: {
    getBeneficiaries() {
      axios
        .get(`${this.$store.state.url}/beneficiaries`)
        .then((response) => {
          console.log(response);
          this.beneficiaries = response.data.data;
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
        .delete(`${this.$store.state.url}/beneficiaries/${id}`)
        .then((response) => {
          console.log(response);
          this.beneficiaries = this.beneficiaries.filter((b) => b.id != id);
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
