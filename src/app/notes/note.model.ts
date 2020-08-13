export class Note {
    constructor (public name: string, public desc: string, 
        public date: {day: number, month: number, year: number}) {
        
    }
}