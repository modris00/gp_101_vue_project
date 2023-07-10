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
              <th>Donor Name</th>
              <th>Donor Phone</th>
              <th>Donor username</th>
              <th>Donor email</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in donors" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
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
export default {
  mounted() {
    this.indexDonor(this.$route.params.id);
  },
  name: "CampaignServiceDetails",
  data() {
    return {
      donors: [],
    };
  },
  methods: {
    indexDonor(id) {
      this.$axios
        .get(`/api/campaigns/${id}/donors/`)

        .then((response) => {
          this.donors = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
