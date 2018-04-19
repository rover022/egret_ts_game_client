import ViewGameHall = ui.ViewGameHall;
import ViewGameRoom = ui.ViewGameRoom;

class GameManager {
    private static _instance: GameManager;

    public userVo: UserVo;
    public hall: ViewGameHall;
    public gameroom: ViewGameRoom;

    public rootContainer: eui.UILayer;

    public static getInstance(): GameManager {
        if (this._instance == null) {
            this._instance = new GameManager();
        }
        return this._instance;
    }


    /**
     * 弹出游戏大厅
     */
    popGameHall() {
        if (this.hall == null) {
            this.hall = new ViewGameHall();
        }
        this.rootContainer.removeChildren();
        this.rootContainer.addChild(this.hall);
    }

    /**
     * 弹出游戏内部房间
     * @param {ui.ViewGameRoom} _view
     */
    popNewGameRoom(_view: ViewGameRoom) {
        this.rootContainer.addChild(_view);
    }
}

/**
 * 网络管理
 */
class NetManager {
    private static _instance: NetManager;
    public host: string = "127.0.0.1";
    public port: number = 3140;

    public rootContainer: eui.UILayer;
    public pomelo: PomeloForEgret.Pomelo;

    public static getInstance(): NetManager {
        if (this._instance == null) {
            this._instance = new NetManager();
        }

        this._instance.init();
        return this._instance;
    }

    /**
     * 进入连接服务
     * @param {string} uid
     * @param {Function} cb
     */
    queryEntryConnect(uid: string, cb?: Function): void {
        this.pomelo.init({host: this.host, port: this.port, log: true}, () => {
            let route = "gate.gateHandler.queryEntry";
            this.pomelo.request(route, {
                uid: uid
            }, data => {
                console.log(data);
                this.pomelo.disconnect();
                if (data.error) {
                    //showError(DUPLICATE_ERROR);
                    return;
                }
            })
        });
    }

    /**
     * 初始化函数
     */
    public init(): void {
        this.pomelo = new PomeloForEgret.Pomelo();
        this.pomelo.on(PomeloForEgret.Pomelo.EVENT_IO_ERROR, function (event) {
            //错误处理
            console.error("io错误,连接失败", event);
        });
        this.pomelo.on(PomeloForEgret.Pomelo.EVENT_HEART_BEAT_TIMEOUT, function (event) {
            //错误处理
            console.error("心跳超时,连接失败", event);
        });
        this.pomelo.on(PomeloForEgret.Pomelo.EVENT_CLOSE, function (event) {
            //错误处理
            console.error("连接断开", event);
        });
        this.pomelo.on(PomeloForEgret.Pomelo.EVENT_KICK, function (event) {
            //错误处理
            console.error("连接被服务器关闭", event);
        });
    }

    enterGame() {
        GameManager.getInstance().popGameHall();
    }
}