export class EventTimer {
    constructor (public name: string, 
        public time: {hour: number, minute: number, second: number}, public stopW: boolean) {
        
    }
}