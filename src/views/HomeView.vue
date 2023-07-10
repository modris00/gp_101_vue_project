<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-3">
      <div class="info-box">
        <span class="info-box-icon bg-info elevation-1">
          <i class="fas fa-portrait"></i>
        </span>

        <div class="info-box-content">
          <span class="info-box-text"> Beneficiaries </span>
          <span class="info-box-number">{{ beneficiariesCount }}</span>
        </div>
        <!-- /.info-box-content -->
      </div>
      <!-- /.info-box -->
    </div>
    <!-- /.col -->
    <div class="col-12 col-sm-6 col-md-3">
      <div class="info-box mb-3">
        <span class="info-box-icon bg-danger elevation-1">
          <i class="fas fa-hands-helping"></i>
        </span>

        <div class="info-box-content">
          <span class="info-box-text">Donors</span>
          <span class="info-box-number">{{ donorsCount }}</span>
        </div>
        <!-- /.info-box-content -->
      </div>
      <!-- /.info-box -->
    </div>
    <!-- /.col -->

    <!-- fix for small devices only -->
    <div class="clearfix hidden-md-up"></div>

    <div class="col-12 col-sm-6 col-md-3">
      <div class="info-box mb-3">
        <span class="info-box-icon bg-success elevation-1">
          <i class="fas fas fa-stream"></i>
        </span>

        <div class="info-box-content">
          <span class="info-box-text">Campaigns</span>
          <span class="info-box-number">{{ campaignsCount }}</span>
        </div>
        <!-- /.info-box-content -->
      </div>
      <!-- /.info-box -->
    </div>
    <!-- /.col -->
    <div class="col-12 col-sm-6 col-md-3">
      <div class="info-box mb-3">
        <span class="info-box-icon bg-warning elevation-1">
          <i class="fas fa-hands-helping"></i>
        </span>

        <div class="info-box-content">
          <span class="info-box-text"> Services </span>
          <span class="info-box-number">{{ servicesCount }}</span>
        </div>
        <!-- /.info-box-content -->
      </div>
      <!-- /.info-box -->
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <div class="card">
        <div class="card-header border-0">
          <h3 class="card-title">Campaign statistics</h3>
        </div>
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center border-bottom mb-3"
          >
            <p class="text-success text-xl">
              <i class="ion ion-ios-refresh-empty"></i>
            </p>
            <p class="d-flex flex-column text-right">
              <span class="font-weight-bold">
                {{ finishedCampaignsCount }}
              </span>
              <span class="text-muted">Campaigns finished</span>
            </p>
          </div>
          <!-- /.d-flex -->
          <div
            class="d-flex justify-content-between align-items-center border-bottom mb-3"
          >
            <p class="text-warning text-xl">
              <i class="ion ion-ios-cart-outline"></i>
            </p>
            <p class="d-flex flex-column text-right">
              <span class="font-weight-bold">
                {{ unfinishedCampaignsCount }}
              </span>
              <span class="text-muted">Unfinished campaigns</span>
            </p>
          </div>
          <!-- /.d-flex -->

          <!-- /.d-flex -->
        </div>
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donorsCount: null,
      beneficiariesCount: null,
      campaignsCount: null,
      servicesCount: null,
      finishedCampaignsCount: null,
      unfinishedCampaignsCount: null,
    };
  },

  methods: {
    fetchData() {
      this.$axios
        .get(`/api/donors`)
        .then((response) => {
          this.donorsCount = response.data.data.length;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(error.message);
        });

      this.$axios
        .get(`/api/beneficiaries`)
        .then((response) => {
          this.beneficiariesCount = response.data.data.length;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$axios
        .get(`/api/campaigns`)
        .then((response) => {
          this.campaignsCount = response.data.data.length;

          // Calculate finished and unfinished campaigns count based on status field
          this.finishedCampaignsCount = response.data.data.filter(
            (campaign) => campaign.status === "finished"
          ).length;

          this.unfinishedCampaignsCount = response.data.data.filter(
            (campaign) => campaign.status !== "finished"
          ).length;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$axios
        .get(`/api/services`)
        .then((response) => {
          this.servicesCount = response.data.data.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
