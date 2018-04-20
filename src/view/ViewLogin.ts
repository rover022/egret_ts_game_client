///<reference path="../manager/GameManager.ts"/>
module ui {


    import VerticalAlign = egret.VerticalAlign;

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
        room1Btn: eui.Button;
        room2Btn: eui.Button;
        myScroller: eui.Scroller;

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
            //建立房间图片
            // this.myScroller
            //let list: eui.List = new eui.List();
            //list.dataProvider = new eui.ArrayCollection([1, 2, 3]);
            //this.myScroller.viewport = list;
            // var hLayout: eui.HorizontalLayout = new eui.HorizontalLayout();
            // hLayout.gap = 0;
            //
            // hallGroup.layout =

            //牛牛房间
            this.room0Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                let room: ViewGameRoom = new ViewGameRoom();
                GameManager.getInstance().popNewGameRoom(room);
            }, this);
            console.log(this.myScroller.viewport);
            let mygroup: eui.Group = this.myScroller.viewport as eui.Group;
            let layout = new eui.HorizontalLayout();
            layout.gap = 20;
            layout.verticalAlign = VerticalAlign.MIDDLE;
            mygroup.layout = new eui.HorizontalLayout();
            for (let i = 0; i < 20; i++) {
                mygroup.addChild(new RoomImageCard());
            }
        }

        private onbeVipHandle() {

        }

        private onSetMoneyHandle() {

        }

        private onGetMoneyHandle() {

        }
    }

    class RoomCard extends eui.Button {
        constructor() {
            super();
            this.icon = RES.getRes("")
        }

    }

    class RoomImageCard extends eui.Image {
        constructor() {
            super();
            this.touchEnabled = true;
            this.source = RES.getRes("ting1_n_png");
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginHandle, this);
            this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchEndHandle, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndHandle, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEndHandle, this);

        }

        private onclickHandle(e: TouchEvent) {
            console.log("onclickHandle");
        }

        private onTouchBeginHandle() {
            // this.scaleX = this.scaleY = 0.95;
            // this.rotation = 45;
            // this.y = 10;
            this.alpha = 0.8;
        }

        private onTouchEndHandle() {
            this.alpha = 1;
            this.scaleX = this.scaleY = 1;
            // this.rotation = 0;
            // this.y = 0;
        }
    }
}
