import { Service } from "../interface/service.model";

export const SERVICES: Service[] = [
  {
    name: 'Delphi Delco Multec HSFI-2.x / HDRC',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Sin activación de la bobina',
      'Sin activación de los inyectores',
      'Mensaje de error en el circuito de 5V'
    ],
    marca: 'Opel',
    modelo: 'Modelo1',
    serie: 'Serie1',
    oem: 'OEM1234'
  },
  {
    name: 'Delphi Delco Multec HSFI-2.x / HDRC',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Sin activación de la bobina',
      'Sin activación de los inyectores',
      'Mensaje de error en el circuito de 5V'
    ],
    marca: 'Opel',
    modelo: 'Corsa',
    serie: 'Serie1',
    oem: 'OEM1234'
  },
  {
    name: 'Opel Zafira ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Error en el sistema de encendido',
      'Problemas con la comunicación CAN',
      'Fallo en el sensor de temperatura del motor'
    ],
    marca: 'Opel',
    modelo: 'Zafira',
    serie: 'Serie2',
    oem: 'OEM5678'
  },
  {
    name: 'Opel Astra ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Problemas con el sistema de inyección',
      'Fallo en el sensor de oxígeno',
      'Error en el circuito de 5V'
    ],
    marca: 'Opel',
    modelo: 'Astra',
    serie: 'Serie3',
    oem: 'OEM91011'
  },
  {
    name: 'Opel Meriva ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Fallo en la gestión del motor',
      'Problemas con el sistema de control de emisiones',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Opel',
    modelo: 'Meriva',
    serie: 'Serie4',
    oem: 'OEM121314'
  },
  {
    name: 'VDO MSM A-Class (LHM)',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Sin activación de la bobina',
      'Sin activación de los inyectores',
      'Sin activación del motor de mando del ralentí',
      'Mensaje de error en el circuito de 5V',
      'Diversas averías',
      'P0230 - No hay control de rele de bomba de combustible.'
    ],
    marca: 'Mercedes',
    modelo: 'Modelo1',
    serie: 'Serie1',
    oem: 'OEM1234'
  },
  {
    name: 'Bosch PSG 5 (EDU from VP30 / VP44)',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Sin activación de la bobina',
      'Sin activación de los inyectores',
      'Sin activación del motor de mando del ralentí',
      'Mensaje de error en el circuito de 5V',
      'Diversas averías',
      'P0230 - No hay control de rele de bomba de combustible.'
    ],
    marca: 'Mercedes',
    modelo: 'Modelo1',
    serie: 'Serie1',
    oem: 'OEM1234'
  },
  {
    name: 'Mercedes E-Class ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Fallo en la comunicación CAN',
      'Problemas con el sistema de control de inyección',
      'Error en el sensor de temperatura'
    ],
    marca: 'Mercedes',
    modelo: 'E-Class',
    serie: 'Serie2',
    oem: 'OEM5678'
  },
  {
    name: 'Mercedes C-Class ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Problemas con el sistema de encendido',
      'Fallo en el sensor de masa de aire (MAF)',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Mercedes',
    modelo: 'C-Class',
    serie: 'Serie3',
    oem: 'OEM91011'
  },
  {
    name: 'Mercedes A-Class ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s)',
    problems: [
      'Fallo en la gestión del motor',
      'Problemas con el sistema de control de emisiones',
      'Error en el sensor de posición del acelerador'
    ],
    marca: 'Mercedes',
    modelo: 'A-Class',
    serie: 'Serie4',
    oem: 'OEM121314'
  },
  {
    name: 'Bosch EDC16C34',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Problemas con el sistema de inyección',
      'Fallo en la comunicación CAN',
      'Error en el sensor de temperatura'
    ],
    marca: 'Peugeot',
    modelo: '206',
    serie: 'Serie2',
    oem: 'OEM5678'
  },
  {
    name: 'Peugeot 307 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de presión del combustible',
      'Error en la comunicación con el módulo de ABS'
    ],
    marca: 'Peugeot',
    modelo: '307',
    serie: 'Serie3',
    oem: 'OEM91011'
  },
  {
    name: 'Peugeot 308 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Problemas con el sistema de recirculación de gases de escape (EGR)',
      'Fallo en el sistema de control de inyección',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Peugeot',
    modelo: '308',
    serie: 'Serie4',
    oem: 'OEM121314'
  },
  {
    name: 'Peugeot 3008 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Fallo en el sistema de regeneración de la batería',
      'Problemas con el sistema de control del motor eléctrico',
      'Error en el sensor de temperatura de la batería'
    ],
    marca: 'Peugeot',
    modelo: '3008',
    serie: 'Serie5',
    oem: 'OEM181920'
  },
  {
    name: 'Peugeot 508 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Peugeot',
    modelo: '508',
    serie: 'Serie6',
    oem: 'OEM212223'
  },
  {
    name: 'Siemens SIMOS 2.1',
    image: 'assets/caja.jpg',
    description: 'Centralitas de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sensor de oxígeno',
      'Problemas con el sistema de encendido',
      'Error en el sensor de posición del acelerador'
    ],
    marca: 'Volkswagen',
    modelo: 'Golf',
    serie: 'Serie3',
    oem: 'OEM91011'
  },
  {
    name: 'Volkswagen Passat ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sensor de presión del turbo',
      'Problemas con el sistema de encendido',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Volkswagen',
    modelo: 'Passat',
    serie: 'Serie4',
    oem: 'OEM121314'
  },
  {
    name: 'Volkswagen Polo ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sensor de oxígeno',
      'Problemas con el sistema de control de emisiones',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Volkswagen',
    modelo: 'Polo',
    serie: 'Serie5',
    oem: 'OEM151617'
  },
  {
    name: 'Volkswagen Tiguan ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Volkswagen',
    modelo: 'Tiguan',
    serie: 'Serie6',
    oem: 'OEM181920'
  },
  {
    name: 'Volkswagen Touareg ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de encendido',
      'Problemas con el sensor de oxígeno',
      'Error en el sensor de presión del combustible'
    ],
    marca: 'Volkswagen',
    modelo: 'Touareg',
    serie: 'Serie7',
    oem: 'OEM212223'
  },
  {
    name: 'Magneti Marelli IAW 5NF',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Error en el sensor de presión del turbo',
      'Fallo en la comunicación OBD',
      'Problemas con el sistema de control de emisiones'
    ],
    marca: 'Fiat',
    modelo: 'Punto',
    serie: 'Serie4',
    oem: 'OEM121314'
  },
  {
    name: 'Fiat 500 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sensor de masa de aire (MAF)',
      'Problemas con el sistema de encendido',
      'Error en el sensor de posición del acelerador'
    ],
    marca: 'Fiat',
    modelo: '500',
    serie: 'Serie5',
    oem: 'OEM151617'
  },
  {
    name: 'Fiat Panda ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de control de emisiones',
      'Problemas con el sensor de oxígeno',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Fiat',
    modelo: 'Panda',
    serie: 'Serie6',
    oem: 'OEM181920'
  },
  {
    name: 'Fiat Tipo ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Fiat',
    modelo: 'Tipo',
    serie: 'Serie7',
    oem: 'OEM212223'
  },
  {
    name: 'Fiat Doblo ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sensor de presión del turbo',
      'Problemas con el sistema de encendido',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Fiat',
    modelo: 'Doblo',
    serie: 'Serie8',
    oem: 'OEM242526'
  },
  {
    name: 'Continental SID208',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Problemas con el sistema de recirculación de gases de escape (EGR)',
      'Fallo en el sistema de control de inyección',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Ford',
    modelo: 'Focus',
    serie: 'Serie5',
    oem: 'OEM151617'
  },
  {
    name: 'Ford Fiesta ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de presión del combustible',
      'Error en la comunicación con el módulo de ABS'
    ],
    marca: 'Ford',
    modelo: 'Fiesta',
    serie: 'Serie6',
    oem: 'OEM181920'
  },
  {
    name: 'Ford Mondeo ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Problemas con el sistema de recirculación de gases de escape (EGR)',
      'Fallo en el sistema de control de inyección',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Ford',
    modelo: 'Mondeo',
    serie: 'Serie7',
    oem: 'OEM212223'
  },
  {
    name: 'Ford Kuga ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Fallo en el sistema de regeneración de la batería',
      'Problemas con el sistema de control del motor eléctrico',
      'Error en el sensor de temperatura de la batería'
    ],
    marca: 'Ford',
    modelo: 'Kuga',
    serie: 'Serie8',
    oem: 'OEM242526'
  },
  {
    name: 'Ford Edge ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas diesel (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Ford',
    modelo: 'Edge',
    serie: 'Serie9',
    oem: 'OEM272829'
  },
  {
    name: 'Denso 275800-6420',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores híbridos',
    problems: [
      'Fallo en el sistema de regeneración de la batería',
      'Problemas con el sistema de control del motor eléctrico',
      'Error en el sensor de temperatura de la batería'
    ],
    marca: 'Toyota',
    modelo: 'Prius',
    serie: 'Serie6',
    oem: 'OEM181920'
  },
  {
    name: 'Toyota Corolla ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores híbridos',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de presión de combustible',
      'Error en el sistema de control de emisiones'
    ],
    marca: 'Toyota',
    modelo: 'Corolla',
    serie: 'Serie7',
    oem: 'OEM212223'
  },
  {
    name: 'Toyota Camry ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores híbridos',
    problems: [
      'Fallo en el sistema de control del motor eléctrico',
      'Problemas con el sensor de temperatura de la batería',
      'Error en el sistema de gestión del motor'
    ],
    marca: 'Toyota',
    modelo: 'Camry',
    serie: 'Serie8',
    oem: 'OEM242526'
  },
  {
    name: 'Toyota RAV4 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores híbridos',
    problems: [
      'Fallo en el sistema de regeneración de la batería',
      'Problemas con el sistema de control del motor eléctrico',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Toyota',
    modelo: 'RAV4',
    serie: 'Serie9',
    oem: 'OEM272829'
  },
  {
    name: 'Toyota Highlander ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores híbridos',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sistema de control de emisiones'
    ],
    marca: 'Toyota',
    modelo: 'Highlander',
    serie: 'Serie10',
    oem: 'OEM303132'
  },
  {
    name: 'Bosch ME7.5',
    image: 'assets/caja.jpg',
    description: 'Centralitas de motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Audi',
    modelo: 'A4',
    serie: 'Serie7',
    oem: 'OEM212223'
  },
  {
    name: 'Audi A3 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas de motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de encendido',
      'Problemas con el sensor de oxígeno',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Audi',
    modelo: 'A3',
    serie: 'Serie8',
    oem: 'OEM242526'
  },
  {
    name: 'Audi A6 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas de motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Audi',
    modelo: 'A6',
    serie: 'Serie9',
    oem: 'OEM272829'
  },
  {
    name: 'Audi Q7 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas de motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de encendido',
      'Problemas con el sensor de oxígeno',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Audi',
    modelo: 'Q7',
    serie: 'Serie10',
    oem: 'OEM303132'
  },
  {
    name: 'Audi TT ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas de motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Audi',
    modelo: 'TT',
    serie: 'Serie11',
    oem: 'OEM333435'
  },
  {
    name: 'Siemens MS43',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Error en el sensor de detonación',
      'Fallo en la comunicación con el sistema de transmisión',
      'Problemas con el sistema de control de velocidad'
    ],
    marca: 'BMW',
    modelo: 'E46',
    serie: 'Serie8',
    oem: 'OEM242526'
  },
  {
    name: 'BMW X5 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'BMW',
    modelo: 'X5',
    serie: 'Serie9',
    oem: 'OEM272829'
  },
  {
    name: 'BMW 3 Series ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de encendido',
      'Problemas con el sensor de oxígeno',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'BMW',
    modelo: '3 Series',
    serie: 'Serie10',
    oem: 'OEM303132'
  },
  {
    name: 'BMW 5 Series ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'BMW',
    modelo: '5 Series',
    serie: 'Serie11',
    oem: 'OEM333435'
  },
  {
    name: 'BMW 7 Series ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas para motores de gasolina (ECU\'s)',
    problems: [
      'Fallo en el sistema de encendido',
      'Problemas con el sensor de oxígeno',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'BMW',
    modelo: '7 Series',
    serie: 'Serie12',
    oem: 'OEM363738'
  },
  {
    name: 'Magneti Marelli IAW 4GF',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores de gasolina',
    problems: [
      'Fallo en el sensor de posición del cigüeñal',
      'Problemas con el sistema de inyección de combustible',
      'Error en el sensor de temperatura del aire de admisión'
    ],
    marca: 'Alfa Romeo',
    modelo: '147',
    serie: 'Serie9',
    oem: 'OEM272829'
  },
  {
    name: 'Alfa Romeo Giulia ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores de gasolina',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Alfa Romeo',
    modelo: 'Giulia',
    serie: 'Serie10',
    oem: 'OEM303132'
  },
  {
    name: 'Alfa Romeo Stelvio ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores de gasolina',
    problems: [
      'Fallo en el sistema de encendido',
      'Problemas con el sensor de oxígeno',
      'Error en el sensor de presión de combustible'
    ],
    marca: 'Alfa Romeo',
    modelo: 'Stelvio',
    serie: 'Serie11',
    oem: 'OEM333435'
  },
  {
    name: 'Alfa Romeo 159 ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores de gasolina',
    problems: [
      'Fallo en el sistema de gestión del motor',
      'Problemas con el sensor de masa de aire (MAF)',
      'Error en el sensor de temperatura del motor'
    ],
    marca: 'Alfa Romeo',
    modelo: '159',
    serie: 'Serie12',
    oem: 'OEM363738'
  },
  {
    name: 'Alfa Romeo Giulietta ECU',
    image: 'assets/caja.jpg',
    description: 'Centralitas (ECU\'s) para motores de gasolina',
    problems: [
      'Fallo en el sistema de control de emisiones',
      'Problemas con el sensor de oxígeno',
      'Error en el sistema de gestión del motor'
    ],
    marca: 'Alfa Romeo',
    modelo: 'Giulietta',
    serie: 'Serie13',
    oem: 'OEM393031'
  }
];
