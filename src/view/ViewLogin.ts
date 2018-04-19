///<reference path="../manager/GameManager.ts"/>
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
            console.log("我点到我自己了");
            NetManager.getInstance().enterGame();

        }
    }

    /**
     * 游戏大厅界面
     */
    export class ViewGameHall extends eui.Component {
        beVipBtn: eui.Button;
        userMoney: eui.Label;
        setmoneyBtn: eui.Button;
        getMoney: eui.Button;
        //
        funCanKuBtn: eui.Button;
        funSuihuanBtn: eui.Button;
        room0Btn: eui.Button;
        room1Btn: eui.Button
        room2Btn: eui.Button

        public constructor() {
            super();
            this.skinName = "resource/game_skins/GameHallSkin.exml"
        }

        createChildren() {
            // this.startBtn = <eui.Button> this.skin.startBtn;

            super.createChildren();
            //this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startFun, this);
            this.beVipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbeVipHandle, this)
            this.setmoneyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetMoneyHandle, this)
            this.getMoney.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetMoneyHandle, this)
            //
            this.funCanKuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

            }, this);
            this.funSuihuanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

            }, this);
            //牛牛房间
            this.room0Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                let room: ViewGameRoom = new ViewGameRoom();
                GameManager.getInstance().popNewGameRoom(room);
            }, this)
        }

        private onbeVipHandle() {

        }

        private onSetMoneyHandle() {

        }

        private onGetMoneyHandle() {

        }
    }


}