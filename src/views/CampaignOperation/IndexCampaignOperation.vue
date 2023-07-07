<template>
  <TableComp
    :headers="headers"
    :rows="CampaignOperation"
    :deleteItem="deleteRow"
    title="Campaign-Operations"
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
  name: "IndexCampaignDonor",
  data() {
    return {
      CampaignOperation: [],
      headers: [
        "id",
        "description",
        "cost",
        "cost_type",
        "date",
        // "admin_id",
        "admin_username",
        "campaign_title",
        "service_name",
      ],
    };
  },
  methods: {
    indexCategories() {
      axios
        .get(`${this.$store.state.url}/campaign-operations`)
        .then((response) => {
          this.CampaignOperation = response.data.data;
          console.log(response.data.object.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      axios
        .delete(`${this.$store.state.url}/campaign-operations/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.CampaignOperation = this.CampaignOperation.filter(
            (item) => item.id != id
          );
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
