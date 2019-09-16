import { Component, OnInit,ViewChild } from "@angular/core";
import * as canvasDatagrid from "canvas-datagrid";
import { SplitComponent } from 'angular-split';;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  grid;
  useTransition: boolean = true
  dblClickTime: number = 0;
  ngOnInit() {
    this.grid = canvasDatagrid({
      parentNode: document.getElementById("logContent"),
      data: [],
      editable: false,
      tree: false,
      // debug: false,
      cellFont: "sans-serif",
      cellFontSize: "8",
      borderDragBehavior: "none",
      selectionMode: "row",
      columnHeaderClickBehavior: "sort",
      // hovered: true,
      showRowHeaders: false,
      schema: [
        {
          name: "Time"
        },
        {
          name: "Diff"
        },
        {
          name: "Layer"
        },
        {
          name: "UE ID"
        },
        {
          name: "Cell"
        },
        {
          name: "HFN"
        },
        {
          name: "SFN"
        },
        {
          name: "RNTI"
        },
        {
          name: "Info"
        },
        {
          name: "Message"
        }
      ],
      style: {
        cellBorderColor: "white"
      }
    });
    this.grid.data = [{"Index":0,"Time":"10:16:04.662","Diff":"-","Layer":"PHY","Cell":0,"Info":"PSS","Message":"freq_shift=15991.3 n_id_cell=457 fs=TDD cyclic_prefix=extended"},{"Index":1,"Time":"10:16:37.853","Diff":"+33.191","Layer":"PHY","Cell":0,"HFN":3,"Info":"PSS","Message":"freq_shift=-14218.2 n_id_cell=10 fs=TDD cyclic_prefix=normal"},{"Index":2,"Time":"10:17:19.860","Diff":"+42.007","Layer":"PHY","Cell":0,"HFN":7,"Info":"PSS","Message":"freq_shift=27219.9 n_id_cell=60 fs=TDD cyclic_prefix=extended"},{"Index":3,"Time":"10:17:20.256","Diff":"+0.396","Layer":"PHY","Cell":1,"HFN":8,"Info":"PSS","Message":"freq_shift=7639.2 n_id_cell=351 fs=TDD cyclic_prefix=normal"},{"Index":4,"Time":"10:18:20.548","Diff":"+60.292","Layer":"PHY","Cell":0,"HFN":13,"Info":"PSS","Message":"freq_shift=9268.4 n_id_cell=29 fs=TDD cyclic_prefix=normal"},{"Index":5,"Time":"10:18:26.034","Diff":"+5.486","Layer":"PHY","Cell":0,"HFN":12,"Info":"PSS","Message":"freq_shift=-3338.5 n_id_cell=428 fs=TDD cyclic_prefix=normal"},{"Index":6,"Time":"10:18:40.435","Diff":"+14.401","Layer":"PHY","Cell":0,"HFN":13,"Info":"PSS","Message":"freq_shift=-15107.9 n_id_cell=302 fs=TDD cyclic_prefix=normal"},{"Index":7,"Time":"10:18:53.326","Diff":"+12.891","Layer":"PHY","Cell":0,"HFN":14,"Info":"PSS","Message":"freq_shift=33079.1 n_id_cell=340 fs=TDD cyclic_prefix=normal"},{"Index":8,"Time":"10:19:06.189","Diff":"+12.863","Layer":"PHY","Cell":1,"HFN":15,"Info":"PSS","Message":"freq_shift=-288.6 n_id_cell=489 fs=TDD cyclic_prefix=normal"},{"Index":9,"Time":"10:19:16.752","Diff":"+10.563","Layer":"PHY","Cell":0,"HFN":16,"Info":"PSS","Message":"freq_shift=-4026.9 n_id_cell=41 fs=TDD cyclic_prefix=normal"},{"Index":10,"Time":"10:19:16.752","Diff":0,"Layer":"PHY","Cell":1,"HFN":17,"Info":"PSS","Message":"freq_shift=-4317.0 n_id_cell=42 fs=TDD cyclic_prefix=normal"},{"Index":11,"Time":"10:19:16.787","Diff":"+0.035","Layer":"PHY","Cell":1,"HFN":18,"Info":"PBCH","Message":"n_rb_dl=100 phich_duration=0 phich_res=2 n_f=4 n_antenna_pbch=2 sched_info_sib1=0"},{"Index":12,"Time":"10:19:16.787","Diff":0,"Layer":"PHY","Cell":0,"HFN":19,"Info":"PBCH","Message":"n_rb_dl=100 phich_duration=0 phich_res=2 n_f=4 n_antenna_pbch=2 sched_info_sib1=0"},{"Index":13,"Time":"10:19:16.812","Diff":"+0.025","Layer":"PHY","UE ID":61440,"Cell":0,"HFN":20,"SFN":"6.5","RNTI":"0xffff","Info":"PDCCH","Message":"cce_index=0/21 L=4 dci=1a"},{"Index":14,"Time":"10:19:16.812","Diff":0,"Layer":"PHY","UE ID":61441,"Cell":1,"HFN":21,"SFN":"6.5","RNTI":"0xffff","Info":"PDCCH","Message":"cce_index=0/21 L=4 dci=1a"},{"Index":15,"Time":"10:19:16.812","Diff":0,"Layer":"PHY","UE ID":61440,"Cell":0,"HFN":22,"SFN":"6.5","RNTI":"0xffff","Info":"PDSCH","Message":"harq=si type=2 rb_start=96 l_crb=4 CW0: tb_len=18 mod=2 rv_idx=1 crc=OK"},{"Index":16,"Time":"10:19:16.838","Diff":"+0.026","Layer":"RRC","UE ID":61440,"Message":"BCCH: SIB1"},{"Index":17,"Time":"10:19:16.838","Diff":0,"Layer":"PHY","UE ID":61441,"Cell":1,"HFN":23,"SFN":"6.5","RNTI":"0xffff","Info":"PDSCH","Message":"harq=si type=2 rb_start=96 l_crb=4 CW0: tb_len=18 mod=2 rv_idx=1 crc=OK"},{"Index":18,"Time":"10:19:16.838","Diff":0,"Layer":"RRC","UE ID":61441,"Message":"BCCH: SIB1"},{"Index":19,"Time":"10:19:16.907","Diff":"+0.069","Layer":"PHY","UE ID":61441,"Cell":1,"HFN":24,"RNTI":"0xffff","Info":"PDCCH","Message":"cce_index=0/21 L=4 dci=1a"},{"Index":20,"Time":"10:19:16.907","Diff":0,"Layer":"PHY","UE ID":61440,"Cell":0,"HFN":25,"RNTI":"0xffff","Info":"PDCCH","Message":"cce_index=0/21 L=4 dci=1a"},{"Index":21,"Time":"10:19:16.907","Diff":0,"Layer":"PHY","UE ID":61440,"Cell":0,"HFN":26,"RNTI":"0xffff","Info":"PDSCH","Message":"harq=si type=2 rb_start=0 l_crb=6 CW0: tb_len=32 mod=2 rv_idx=0 crc=OK"},{"Index":22,"Time":"10:19:16.907","Diff":0,"Layer":"RRC","UE ID":61440,"Message":"BCCH: SIB"},{"Index":23,"Time":"10:19:16.910","Diff":"+0.003","Layer":"PHY","UE ID":61441,"Cell":1,"HFN":27,"RNTI":"0xffff","Info":"PDSCH","Message":"harq=si type=2 rb_start=0 l_crb=6 CW0: tb_len=32 mod=2 rv_idx=0 crc=OK"},{"Index":24,"Time":"10:19:16.910","Diff":0,"Layer":"RRC","UE ID":61441,"Message":"BCCH: SIB"}]
  }
  _size1=75;
  _size2=25;
  @ViewChild('mySplit') mySplitEl: SplitComponent
  get size1() {
    return this._size1;
  }

  set size1(value) {
      this._size1 = value;
  }
  get size2() {
    return this._size2;
  }

  set size2(value) {
      this._size2 = value;
  }
  gutterClick(e: {gutterNum: number, sizes: Array<number>}) {
    if(e.gutterNum === 1) {
        if(this.size2 !== 0) {
            this.size1 += this.size2;
            this.size2 = 0;
        }
        else if(this.size2 === 0) {
            this.size1 -= 25;
            this.size2 = 25;
        }
        else {
            this.size1 = 75;
            this.size2 = 25;
        }
    }
}
}
