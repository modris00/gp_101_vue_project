<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All {{ title }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table :id="title" class="table table-bordered table-striped">
            <thead>
              <th>#</th>
              <!-- <th v-for="header in headers" v-show="header == 'image'">
                {{ header }}
              </th> -->
              <th
                v-for="header in headers"
                v-show="header != 'id' && header != 'image'"
              >
                {{ header }}
              </th>
              <th v-if="headers.length > 0">Actions</th>
            </thead>

            <tbody>
              <tr v-for="(row, index) in rows">
                <td>{{ index + 1 }}</td>
                <!-- <td v-for="header in headers" v-show="header == 'image'">
                  <img :src="imageURL + row[header]" width="40" height="40" />
                </td> -->
                <td
                  v-for="header in headers"
                  v-show="header != 'id' && header != 'image'"
                >
                  {{ row[header] }}
                </td>
                <td>
                  <!-- prettier-ignore -->
                  <!-- <button type="button" style="margin-right: 2px" class="btn btn-warning">
                    Edit
                    <i class="fas fa-edit"></i>
                  </button> -->

                  <!-- <router-link style="margin-right: 2px" class="btn btn-warning" :to="{path :`/${title}/${row.id}/edit`}" >Edit</router-link> -->

                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-warning"
                    :to="{ name: routeName, params: { id: row.id } }"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>

                  <!-- prettier-ignore -->
                  <button type="button" @click="deleteItem($event, row.id)" class="btn btn-danger">
                    
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr v-if="rows.length < 1">
                <td
                  class="bg-secondary text-light text-center"
                  :colspan="headers.length + 2"
                >
                  No Data.
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
  <!-- /.row -->
</template>
<script>
export default {
  props: ["title", "headers", "rows", "deleteItem"],

  computed: {
    routeName() {
      return this.title.toLowerCase() + ".edit";
    },
    imageURL() {
      var url = `http://127.0.0.1:8000/storage/${this.title.toLowerCase()}/`;
      // var url = `http://127.0.0.1:8000/api/${this.routeName}/app/public/${image}`;
      return url;
    },
  },
};
</script>
