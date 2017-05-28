// # Socket Service

import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

import * as io from 'socket.io-client';

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class SocketService {
    
    private url = 'http://localhost:3000';
    private socket; 

    constructor(private http: Http) {
        this.socket = io(this.url);
    }

    getSocket(): any{
        return this.socket;
    }

    
}