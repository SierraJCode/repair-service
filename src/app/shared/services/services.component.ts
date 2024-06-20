import { icon } from './../../icons';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  icon = icon;

  qualityItems = [
    {
      icon: this.icon.faStar,
      title: 'Excelencia',
      description: 'Servicio premium. Recogida y entrega incluidas.'
    },
    {
      icon: this.icon.faMoneyCheckDollar,
      title: 'Presupuesto',
      description: 'Presupuestos cerrados anticipadamente.'
    },
    {
      icon: this.icon.faCalendar,
      title: 'Resguardo',
      description: 'Ofrecemos 1 año de garantía en reparaciones.'
    },
    {
      icon: this.icon.faClock,
      title: 'Experiencia',
      description: '15 años trabajando con profesionales'
    }
  ];

}
