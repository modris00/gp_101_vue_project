<template>
  <TableComp
    :headers="headers"
    :rows="Campaigns"
    :deleteItem="deleteRow"
    title="Campaigns"
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
    this.indexCategories();
  },
  name: "IndexCampaign",
  data() {
    return {
      Campaigns: [],
      headers: [
        "id",
        "title",
        "status",
        "amount",
        "start_date",
        "end_date",
        "admin_id",
        "currency_name",
      ],
    };
  },
  methods: {
    indexCategories() {
      axios
        .get(`${this.$store.state.url}/campaigns`)
        .then((response) => {
          this.Campaigns = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      axios
        .delete(`${this.$store.state.url}/campaigns/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.Campaigns = this.Campaigns.filter((item) => item.id != id);
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
