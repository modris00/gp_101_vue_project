<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Donors Campaigns</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table id="Campaigns" class="table table-bordered table-striped">
            <thead>
              <th>#</th>
              <th style="display: none">id</th>
              <th>Title Campaign</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in campaigns" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.start_date }}</td>
                <td>{{ item.end_date }}</td>
              </tr>
              <!--v-if-->
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
    this.getUser();
    this.indexCampaign(this.id);
  },
  name: "CampaignDonorDetails",
  data() {
    return {
      campaigns: [],
      id: "",
    };
  },
  methods: {
    getUser() {
      this.id = localStorage.getItem("id");
      console.log(this.id);
      this.name_user = localStorage.getItem("username");
    },
    indexCampaign(id) {
      /// Id static
      this.$axios
        .get(`/api/donors/${id}/campaigns/`)
        .then((response) => {
          this.campaigns = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
