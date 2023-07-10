<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Beneficiary Campaigns</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table id="Campaigns" class="table table-bordered table-striped">
            <thead>
              <th>#</th>
              <th style="display: none">id</th>
              <th>Beneficiary Name</th>
              <th>Beneficiary age</th>
              <th>Beneficiary gender</th>
              <th>Beneficiary username</th>
              <th>Beneficiary email</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in beneficiaries" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.gender }}</td>
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
    this.indexBeneficiary(this.$route.params.id);
  },
  name: "CampaignServiceDetails",
  data() {
    return {
      beneficiaries: [],
    };
  },
  methods: {
    indexBeneficiary(id) {
      this.$axios
        .get(`/api/campaigns/${id}/beneficiaries/`)

        .then((response) => {
          this.beneficiaries = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
