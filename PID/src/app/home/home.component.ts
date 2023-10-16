import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, ModalDismissReasons, NgbDatepickerModule, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbNavModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private modalService: NgbModal) {
  }
  active = 1;

  dummyIdentificacions = [
    {
      title: "INE",
      id: 1,
      name: "Rodrigo Valencia",
      front: "../../assets/visualIDs/INE.jpg",
      back: "../../assets/visualIDs/INEback.jpg",
      type: "INE"
    },
    {
      title: "Pasaporte",
      id: 2,
      name: "Rodrigo Valencia",
      front: "../../assets/visualIDs/INE.jpg",
      back: "../../assets/visualIDs/INEback.jpg",
      type: "PSP"
    },
    {
      title: "Licencia de Conducir",
      id: 3,
      name: "Rodrigo Valencia",
      front: "../../assets/visualIDs/INE.jpg",
      back: "../../assets/visualIDs/INEback.jpg",
      type: "LC"
    },
    {
      title: "Cartilla Militar",
      id: 4,
      name: "Rodrigo Valencia",
      front: "../../assets/visualIDs/INE.jpg",
      back: "../../assets/visualIDs/INEback.jpg",
      type: "CM"
    },
    {
      title: "Test",
      id: 5,
      name: "Rodrigo Valencia",
      front: "../../assets/visualIDs/INE.jpg",
      back: "../../assets/visualIDs/INEback.jpg",
      type: "TST"
    }
  ]
  protected readonly open = open;

  addIDRequest(content:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result:any) => {
        // this.closeResult = `Closed with: ${result}`;
      },
      (reason:any) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
}
