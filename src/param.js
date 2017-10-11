export default class param {
    constructor() {}

    /**
	 * 用于URL等参数解析
	 * @method param.param
	 * @param sValPairs {String} url表达式
	 * @param sElemSep {String} 参数分隔符
	 * @param sPairSep {String} 复制分隔符
	 * @example 
	 	var p = param.param("a=1&b=2","&", "=");
	 	输出p实际上就是{a:1,b:2}，所以p['a']就是1，p['b']就是2
	 */
    _param(sValPairs, sElemSep, sPairSep) {
        let result = {};
        if (sValPairs) {
            let aElem = sValPairs.toString().split(sElemSep);
            for (let i = 0; i < aElem.length; i++) {
                let aPair = aElem[i].split(sPairSep);
                let temp = (aPair.length > 1) && (result[aPair[0]] = unescape(aPair[1]));
            }
        }
        return result;
    }

    /**
     * 获取一个表达式串中的参数
     * @method param.getParam
     * @param sValPairs {String} 表达式 例如"a=1&b=2"
     * @param sName {String} 要获取的参数名 "a"
     * @param sElemSep {String} 参数分割符 "&"
     * @param sPairSep {String} 赋值的分隔符 "="
     * @return {String} 参数值
     * @example 例如 var a = param.getParam("a=1&b=2", "a", "&", "=");
     */
    getParam(sValPairs, sName, sElemSep, sPairSep) {
        let xParam = this._param(sValPairs, sElemSep, sPairSep);
        return xParam[sName] ? xParam[sName] : "";
    }

    /**
     * 设置一段参数
     * @method pram.setParam 
     * @param sValPairs {String} 原有的表达式 例如"a=1"
     * @param sName {String} 新加入的参数名 
     * @param sValue {String} 新参数的值
     * @return {String} 新的表达式"a=1&b=2"
     * @example 例如 var sParam = param.setParam("a=1", "b", "2");
     */
    setParam(sValPairs, sName, sValue) {
        sValPairs = sValPairs.toString();
        sName = sName.toString();
        sValue = sValue.toString();
        var r = new RegExp("(^|\\W)" + sName + "=[^&]*", "g");
        return (sValPairs.match(r)) ? sValPairs.replace(r, "$1" + sName + "=" + sValue) : sValPairs + (sValPairs ? "&" : "") + sName + "=" + sValue;
    }

    /**
     * 返回当前url的参数
     * @method pram.locationSearch 
     * @example 例如 var p = param.locationSearch();
     */
    locationSearch() {
        return this._param(location.search.substr(1), '&', '=')
    }

}