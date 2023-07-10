<template>
  <!-- <TableComp
    :headers="headers"
    :rows="beneficiaries"
    :deleteItem="deleteRow"
    title="Beneficiaries"
  ></TableComp> -->
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Beneficiaries</h3>
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
              <th>Age</th>
              <th>Area</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Username</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr v-for="(B, index) in beneficiaries" :key="B.id">
                <td>{{ index + 1 }}</td>
                <td>{{ B.name }}</td>
                <td>{{ B.age }}</td>
                <td>{{ B.area_name ?? "" }}</td>
                <td>{{ B.gender }}</td>
                <td>{{ B.email }}</td>
                <td>{{ B.phone }}</td>
                <td>{{ B.username }}</td>
                <td>
                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-warning"
                    :to="{ name: 'beneficiaries.edit', params: { id: B.id } }"
                    title="Edit Beneficiary"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>

                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-info"
                    :to="{
                      name: 'beneficiary-campaign-details',
                      params: { id: B.id },
                    }"
                    title="Beneficiary's Campaigns"
                  >
                    <i class="fas fa-info"></i>
                  </router-link>

                  <!-- prettier-ignore -->
                  <button type="button" title="Delete beneficiary" @click="deleteItem($event, B.id)" class="btn btn-danger">                    
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
  props: [],
  mounted() {
    this.getBeneficiaries();
  },
  data() {
    return {
      beneficiaries: [],
      // headers: [
      //   "name",
      //   "age",
      //   "gender",
      //   "area_id",
      //   "email",
      //   "username",
      //   "phone",
      // ],
    };
  },
  methods: {
    getBeneficiaries() {
      this.$axios
        .get(`/api/beneficiaries`)
        .then((response) => {
          console.log(response);
          this.beneficiaries = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            this.$toast.error(error.message);
          }
        });
    },
    deleteRow(event, id) {
      //   console.log(event);
      console.log(id);
      this.$axios
        .delete(`/api/beneficiaries/${id}`)
        .then((response) => {
          console.log(response);
          this.beneficiaries = this.beneficiaries.filter((b) => b.id != id);
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
