<template>
  <TableComp
    :headers="headers"
    :rows="CampaignsDonor"
    :deleteItem="deleteRow"
    title="Campaigns-Donors"
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
      CampaignsDonor: [],
      headers: ["id", "amount", "campaign_title", "donor_name"],
    };
  },
  methods: {
    indexCategories() {
      this.$axios
        .get(`/api/campaigns-donors`)
        .then((response) => {
          this.CampaignsDonor = response.data.data;
          console.log(response.data.object.data);
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message);
        });
    },
    deleteRow(event, id) {
      this.$axios
        .delete(`/api/campaigns-donors/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.CampaignsDonor = this.CampaignsDonor.filter(
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
