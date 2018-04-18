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
}