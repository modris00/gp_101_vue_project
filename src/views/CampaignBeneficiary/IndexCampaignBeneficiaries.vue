<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Campaign-Beneficiary Records</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table
            id="contactRequests"
            class="table table-bordered table-striped"
          >
            <thead>
              <!-- actor , title, message, email, phone , stamps, del at -->
              <th>#</th>
              <th>Beneficiary</th>
              <th>Campaign Title</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Description</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr
                v-for="(campaignBeneficiary, index) in campaignBeneficiaries"
                :key="campaignBeneficiary.id"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ campaignBeneficiary.beneficiary_name ?? "--" }}</td>
                <td>{{ campaignBeneficiary.campaign_title ?? "--" }}</td>
                <td>{{ campaignBeneficiary.amount }}</td>
                <td>{{ campaignBeneficiary.status }}</td>
                <td>{{ campaignBeneficiary.description }}</td>
                <td>
                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-warning"
                    :to="{
                      name: 'campaignBeneficiary.edit',
                      params: { id: campaignBeneficiary.id },
                    }"
                    >Edit
                    <i class="fas fa-edit"></i>
                  </router-link>

                  <!-- prettier-ignore -->
                  <button type="button" @click="deleteItem($event, campaignBeneficiary.id)" class="btn btn-danger">
                    Delete
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
    <!-- /.col -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.indexCampaignBeneficiaries();
  },
  name: "IndexAdmin",
  data() {
    return {
      campaignBeneficiaries: [],
    };
  },
  methods: {
    indexCampaignBeneficiaries() {
      axios
        .get(`${this.$store.state.url}/campaigns-beneficiaries`)
        .then((response) => {
          this.campaignBeneficiaries = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
          console.log(error);
        });
    },
    deleteItem(event, id) {
      console.log(event);
      axios
        .delete(`${this.$store.state.url}/campaigns-beneficiaries/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.campaignBeneficiaries = this.campaignBeneficiaries.filter(
            (item) => item.id != id
          );
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            this.$toast.error(error.message);
          }
        });
    },
  },
};
</script>
