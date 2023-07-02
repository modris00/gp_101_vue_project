<template>
  <TableComp
    :headers="headers"
    :rows="Bills"
    :deleteItem="deleteRow"
    title="bills"
  ></TableComp>
</template>

<script>
import axios from "axios";
import TableComp from "../../components/Table.vue";

export default {
  components: {
    TableComp,
  },
  mounted() {
    this.indexBills();
  },
  name: "IndexBill",
  data() {
    return {
      Bills: [],
      headers: [
        "id",
        "cost",
        "image",
        "description",
        "currency_id",
        "campaign_id",
        "supplier_id",
        "campaign_service_id",
      ],
    };
  },
  methods: {
    indexBills() {
      axios
        .get(`${this.$store.state.url}/bills`)
        .then((response) => {
          this.Bills = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      axios
        .delete(`${this.$store.state.url}/bills/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.Bills = this.Bills.filter((item) => item.id != id);
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
