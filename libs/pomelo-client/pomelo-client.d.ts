declare class EventEmitter {
    addEventListener(event: string, f: Function);

    emit(s: string);

    hasListeners(s: string);

    listeners();

    off(event: string, f: Function);

    on(event: string, f: Function);

    once(event: string, f: Function);

    removeAllListeners();

    removeEventListener(event: string, f: Function);

    removeListener(event: string, f: Function);

}

declare let pomelo: Pomelo;


declare class Pomelo extends EventEmitter {
    /**
     * @private
     * 创建一个Validator对象
     */
    init(params: { host: string, port: number, log?: boolean }, cb: Function);

    disconnect();

    request(route: string, msg: any, cb: Function);

    notify(route: string, msg: any)

    request(route: string, msg: any, cb: Function);

    decode(data);

    /**
     * @private
     * 使大于等于指定组件层级的元素立即应用属性
     * @param target 要立即应用属性的组件
     */
    //validateClient(target: UIComponent): void;
}
