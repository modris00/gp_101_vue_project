<template>
  <TableComp
    :headers="headers"
    :rows="currencies"
    :deleteItem="deleteRow"
    title="Currencies"
  ></TableComp>
</template>
<script>
import TableComp from "../../components/Table.vue";

export default {
  name: "CurrencyView",
  components: { TableComp },
  props: [],
  mounted() {
    this.getCurrency();
  },
  data() {
    return {
      currencies: [],
      headers: [
        "id",
        "name",
        "abbreviation",
        "campaigns_count",
        // "bills_count",
        "created_at",
      ],
    };
  },
  methods: {
    getCurrency() {
      this.$axios
        .get(`/api/currencies`)
        .then((response) => {
          console.log(response);
          this.currencies = response.data.data;
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
        .delete(`/api/currencies/${id}`)
        .then((response) => {
          this.currencies = this.currencies.filter((c) => c.id != id);
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
