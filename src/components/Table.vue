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
              <th v-for="header in headers" v-show="header != 'id'">
                {{ header }}
              </th>
              <th v-if="rows.length > 0">Actions</th>
            </thead>

            <tbody>
              <tr v-for="(row, index) in rows">
                <td>{{ index + 1 }}</td>
                <td v-for="header in headers" v-show="header != 'id'">
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
                    >Edit
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <!-- prettier-ignore -->
                  <button type="button" @click="deleteItem($event, row.id)" class="btn btn-danger">
                    Delete
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr v-if="rows.length < 1">
                <td class="bg-secondary">No Data.</td>
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
  },
};
</script>
