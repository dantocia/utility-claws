export class EventTimerLap {
    constructor (public name: string,public TID: number,
        public time: {hour: number, minute: number, second: number}
        ) {
        
    }
}