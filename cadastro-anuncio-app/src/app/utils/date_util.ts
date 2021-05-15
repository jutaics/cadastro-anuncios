export class DateUtil {

    private static year: number;
    private static month: number;
    private static day: number;

    static validarDataBr(dateString: string): boolean {
        try {
            const date = this.parseStringDate(dateString);
            const d = date.getDate();
            const m = date.getUTCMonth() + 1;
            const y = date.getFullYear();
            return d === this.day && m === this.month && y === this.year;
        } catch (e) {
            return false;
        }

    }

    static parseStringDate(dateString: string): Date {
        this.getYearMonthDay(dateString);
        let dayString = this.day.toString();
        let monthString = this.month.toString();
        if (this.day < 10) {
            dayString = '0' + this.day;
        }
        if (this.month < 10) {
            monthString = '0' + this.month;
        }
        const date = new Date(this.year + '-' + monthString + '-' + dayString + 'T00:00:00');
        return date;

    }

    static getYearMonthDay(dateString: string): void {
        const dateArray = dateString.split('/');
        this.year = Number.parseInt(dateArray[2]);
        this.month = Number.parseInt(dateArray[1]);
        this.day = Number.parseInt(dateArray[0]);
    }
}
