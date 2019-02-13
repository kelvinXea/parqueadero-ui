import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

export const StompConfig: InjectableRxStompConfig = {
  brokerURL: 'ws://192.168.18.233:8080/socket',

  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
