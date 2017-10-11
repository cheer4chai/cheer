export default class string {

    constructor() {}

    format(str, data) {
        var _format = /<%=([\d\w\.]+)%>/g;
        var args = Array.prototype.slice.call(arguments),
            v;
        if (args.length === 1 && typeof(args[0]) === 'object') {
            args = args[0];
        }
        _format.lastIndex = 0;

        function route(obj, path) {
            obj = obj || {};
            var r = /([\d\w_]+)/g,
                m;
            r.lastIndex = 0;
            while ((m = r.exec(path)) != null) {
                obj = obj[m[0]];
                if (obj === undefined || obj === null) {
                    break;
                }
            }
            return obj;
        }

        return str.replace(_format,
            function(m, n) {
                v = route(data, n);
                return v === undefined ? m : v;
            });
    }

}