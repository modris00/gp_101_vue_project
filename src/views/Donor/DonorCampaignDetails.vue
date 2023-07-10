<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header"><h3 class="card-title">All Campaigns</h3></div>
        <!-- /.card-header -->
        <div class="card-body">
          <table id="Campaigns" class="table table-bordered table-striped">
            <thead>
              <th>#</th>
              <th>title</th>
              <th>status</th>
              <th>start_date</th>
              <th>end_date</th>
              <!-- <th>currency_name</th> -->
            </thead>
            <tbody>
              <tr v-for="(item, index) in Campaigns" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.start_date }}</td>
                <td>{{ item.end_date }}</td>
                <!-- <td>{{ item.currency_name }}</td> -->
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
    this.indexCampaign();
    //console.log(this.$store.state.role);
  },
  data() {
    return {
      Campaigns: [],
    };
  },
  methods: {
    indexCampaign() {
      this.$axios
        .get(`/api/donors/${this.$route.params.id}/campaigns`)
        .then((response) => {
          this.Campaigns = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          if (error.response.data) {
            this.$toast.error(error.response.data.message); // from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
          console.log(error);
        });
    },
  },
};
</script>
