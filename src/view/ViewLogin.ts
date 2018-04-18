module ui {
    export class ViewLogin extends eui.Component {
        private startBtn: eui.Button;

        public constructor() {
            super();
            this.skinName = "resource/game_skins/PreloadSkin.exml"
        }

        createChildren() {
            // this.startBtn = <eui.Button> this.skin.startBtn;
            super.createChildren();
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startFun, this);

        }

        private startFun(e: egret.TouchEvent) {
            console.log("我点到我自己了")
            GameManager.getInstance().popGameHall();
        }
    }

    /**
     * 游戏大厅界面
     */
    export class ViewGameHall extends eui.Component {
        public constructor() {
            super();
            this.skinName = "resource/game_skins/GameHallSkin.exml"
        }

        createChildren() {
            // this.startBtn = <eui.Button> this.skin.startBtn;
            super.createChildren();
            //this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startFun, this);

        }
    }


    /**
     * 游戏房间界面
     */
    export class ViewGameRoom extends eui.Component {
        public constructor() {
            super();
            this.skinName = "resource/game_skins/RoomSkin.exml"
        }

        createChildren() {
            // this.startBtn = <eui.Button> this.skin.startBtn;
            super.createChildren();
            //this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startFun, this);

        }
    }
}