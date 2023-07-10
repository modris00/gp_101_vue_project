<template>
  <!-- <TableComp
    :headers="headers"
    :rows="Donors"
    :deleteItem="deleteRow"
    title="Donors"
  ></TableComp> -->
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Donors</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table
            id="contactRequests"
            class="table table-bordered table-striped"
          >
            <thead>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Area</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr v-for="(donor, index) in Donors" :key="donor.id">
                <td>{{ index + 1 }}</td>
                <td>{{ donor.name }}</td>
                <td>{{ donor.username }}</td>
                <td>{{ donor.email }}</td>
                <td>{{ donor.phone }}</td>
                <td>{{ donor.area_name ?? "" }}</td>
                <td>
                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-warning"
                    :to="{ name: 'donors.edit', params: { id: donor.id } }"
                    title="Edit Donor"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>

                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-info"
                    :to="{
                      name: 'donor-campaign-details',
                      params: { id: donor.id },
                    }"
                    title="Donor's Campaigns"
                  >
                    <i class="fas fa-info"></i>
                  </router-link>

                  <!-- prettier-ignore -->
                  <button type="button" title="Delete Donor" @click="deleteItem($event, donor.id)" class="btn btn-danger">                    
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
export default {
  mounted() {
    this.indexDonors();
  },
  name: "IndexDonor",
  data() {
    return {
      Donors: [],
      // headers: ["id", "name", "username", "email", "phone", "area_name"],
    };
  },
  methods: {
    indexDonors() {
      this.$axios
        .get(`/api/donors`)
        .then((response) => {
          this.Donors = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            this.$toast.error(error.message);
          }
          console.log(error);
        });
    },

    deleteItem(event, id) {
      console.log(id);
      this.$axios
        .delete(`/api/donors/${id}`)
        .then((response) => {
          this.Donors = this.Donors.filter((c) => c.id != id);
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); // from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
        });
    },
  },
};
</script>
