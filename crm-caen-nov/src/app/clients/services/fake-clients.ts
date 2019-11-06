import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';


export const fakeclients: Client[] = [
    new Client({
      id: 'numberone',
      name: 'plot',
      email: 'lafistiniere@gmail.com',
      state: StateClient.ACTIF
    }),
    new Client({
      id: 'numbertwo',
      name: 'plot2',
      email: 'fistouille@gmail.com',
      state: StateClient.ACTIF
    })
];
