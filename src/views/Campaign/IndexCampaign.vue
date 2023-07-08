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
              <th style="display: none">id</th>
              <th>title</th>
              <th>status</th>
              <th>amount</th>
              <th>start_date</th>
              <th>end_date</th>
              <th>admin_id</th>
              <th>currency_name</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in Campaigns" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.start_date }}</td>
                <td>{{ item.end_date }}</td>
                <td>{{ item.admin_id }}</td>
                <td>{{ item.currency_name }}</td>
                <td>
                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-warning"
                    :to="{ name: 'campaigns.edit', params: { id: item.id } }"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <!-- prettier-ignore --><button type="button" @click="deleteRow($event,item.id)" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                </td>
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
  components: {
    TableComp,
  },
  mounted() {
    this.indexCampaign();
  },
  name: "IndexCampaign",
  data() {
    return {
      Campaigns: [],
    };
  },
  methods: {
    indexCampaign() {
      axios
        .get(`${this.$store.state.url}/campaigns`)
        .then((response) => {
          this.Campaigns = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow(event, id) {
      axios
        .delete(`${this.$store.state.url}/campaigns/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.Campaigns = this.Campaigns.filter((item) => item.id != id);
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
