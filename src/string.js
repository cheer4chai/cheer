export default class string {

    constructor() {}

    render(template, data) {
        const spliter = /\<\%.*?\%\>/g
        const plain = template.split(spliter)
        const dynamic = template.match(spliter).map(str => str.startsWith(`<%=`) ? `yield(${str.slice(3, -2).trim()})` : str.slice(2, -2).trim())
        const code = plain.map((txt, i) => i in dynamic ? `yield(${JSON.stringify(txt)})\n${dynamic[i]}\n` : `yield(${JSON.stringify(txt)})\n`).join('')
        const params = Object.getOwnPropertyNames(data)
        const output = []
        new Function(...params, "yield", code)(...params.map(name => data[name]), t => output.push(t))
        return output.join('')
    }

    LENFix(i, n) {
        let sRat = i.toString();
        while(sRat.length<n) {
            sRat = '0' + sRat;
        }
        return sRat;
    }

    dateFormat(date, format) {
        const dateType = '[object Date]'
        if(Object.prototype.toString.call(date) !== dateType) return;
        format = format || "%Y-%m-%d";
        let mapData = {
            '%Y': date.getFullYear(),
            '%m': this.LENFix(date.getMonth()+1,2),
            '%d': this.LENFix(date.getDate(),2),
            '%M': this.LENFix(date.getMinutes(),2),
            '%S': this.LENFix(date.getSeconds(),2)
        }
        return format.replace(/%[YmdHMS]/g, function(sData) {
            return mapData[sData];
        })
    }

}