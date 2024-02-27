export class PickARestroUtil {

    constructor(){}

    static isNullOrUndefined(object : any) {
        return (object === undefined) || (object === null);
    }

    static stringNullOrEmpty(str : any) {
        return (str === undefined) || (str === null) || (str === "");
    }

}