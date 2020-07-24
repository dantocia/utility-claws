export class Note {
    constructor (public name: string, public desc: string, 
        public date: {day: string, month: string, year: string}) {
        
    }
}