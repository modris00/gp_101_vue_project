<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Details Campaigns</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table id="Campaigns" class="table table-bordered table-striped">
            <thead>
              <th>#</th>
              <th style="display: none">id</th>
              <!-- <th>title</th>
              <th>status</th>
              <th>amount</th>
              <th>start_date</th>
              <th>end_date</th>
              <th>admin_id</th>
              <th>currency_name</th> -->

              <th>Services Name</th>
              <th>Aactive Services</th>
              <th>Services Description</th>
              <!-- <th>beneficiaries count</th> -->
            </thead>
            <tbody>
              <tr v-for="(item, index) in Campaigns" :key="index">
                <td>{{ this.$route.params.id }}</td>
                <td>{{ item.name }}</td>
                <td
                  :style="{
                    color: item.active ? 'green' : 'red',
                    fontWeight: 'bold',
                  }"
                >
                  {{ item.active ? "active" : " in active" }}
                </td>
                <td>{{ item.description }}</td>
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
    this.indexCampaign(this.$route.params.id);
  },
  name: "CampaignServiceDetails",
  data() {
    return {
      Campaigns: [],
    };
  },
  methods: {
    indexCampaign(id) {
      this.$axios
        .get(`/api/campaigns/${id}/services/`)
        .then((response) => {
          this.Campaigns = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
