<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Campaigns</h3>
        </div>
        <div class="card-body">
          <!-- prettier-ignore -->
          <!-- <table id="example1" class="table table-bordered table-striped"></table> -->
          <DataTable
            ref="table"
            :data="data"
            :columns="columns"
            :options="{
              responsive: true,
              autoWidth: false,
              dom: 'Bfrtip',
            }"
            class="table table-bordered table-striped"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Value</th>
                <th>Type</th>
                <th>Test</th>
                <th>Action</th>
              </tr>
            </thead>

            <tfoot>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Value</th>
                <th>Type</th>
                <th>Test</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net";
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
// import pdfmake from "pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfmake.vfs = pdfFonts.pdfMake.vfs;
import "datatables.net-responsive-bs5";
import JsZip from "jszip";
window.JSZip = JsZip;
DataTable.use(DataTableLib);
// DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);

export default {
  name: "CampaignsView",
  components: { DataTable },
  mounted() {
    this.dt = this.$refs.table.dt(); // Store the DataTable instance in dt property

    // Attach the click event handler to the DataTable's body
    $(this.dt.table().body()).on("click", "button", (e) => {
      const id = e.target.id;
      this.deleteItem(id);
    });
  },
  data() {
    return {
      dt: null,
      data: [
        { id: 1, name: "n1", value: "v1", type: "t1", test: "t" },
        // [1, 1, 1, 1, 1],
        // [2, 2, 2, 2, 2],
      ],
      columns: [
        { data: "id" },
        { data: "name" },
        { data: "value" },
        { data: "type" },
        { data: "test" },
        {
          data: null,
          orderable: false,
          render: function (data) {
            return `<button id="${data.id}" @click="deleteItem(${data.id})">Delete</button>`;
          },
        },
      ],
    };
  },
  methods: {
    deleteItem(id) {
      console.log(id);
    },
  },
};
</script>
<style></style>
