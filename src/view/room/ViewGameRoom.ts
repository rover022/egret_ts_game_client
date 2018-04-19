enum GameState {
    GAME_BET,
    GAME_RUN_RESULT,
}

module ui {
    /**
     * 游戏房间界面
     */
    export class ViewGameRoom extends eui.Component {
        private exitBtn: eui.Button;

        public gametimer: egret.Timer;
        public gameStage: string;
        public readonly maxGameCount: number = 60;
        public gameCount: number = 60;
        public moveContainer: egret.Sprite = new egret.Sprite();
        public cardPoint = [[154, 288, 421], [732, 867, 1002]];

        public constructor() {
            super();
            this.skinName = "resource/game_skins/RoomSkin.exml";

        }

        createChildren() {
            // this.startBtn = <eui.Button> this.skin.startBtn;
            super.createChildren();
            //this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startFun, this);
            this.exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                this.parent.removeChild(this);
            }, this);
            //
            this.gametimer = new egret.Timer(1000, 0);
            this.gametimer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandle, this);
            // this.gametimer.start();
            //
            this.addChild(this.moveContainer);
            //run test
            let a1 = [[1, "A"], [1, "A"], [1, "A"]];
            let a2 = [[2, "B"], [2, "C"], [3, "D"]];
            this.showGameReust(a1, a2);
        }


        private onTimerHandle(e: egret.TimerEvent) {
            if (this.gameCount == this.maxGameCount) {
                this.setGameState(GameState.GAME_BET);
            }
            if (this.gameCount == 30) {
                this.setGameState(GameState.GAME_RUN_RESULT);
            }
            this.gameCount--;
            if (this.gameCount < 0) {
                this.gameCount = this.maxGameCount;
            }
        }

        public setGameState(GAME_RUN_RESULT: GameState) {

        }

        /**
         * 展示2路牌
         * @param {Card[]} a1
         * @param {Card[]} a2
         */
        public showGameReust(a1, a2) {
            let p1 = this.cardPoint[0];
            let p2 = this.cardPoint[1];
            for (let i = 0; i < 3; i++) {
                let t1 = a1[i];
                let card1 = Card.make(t1[0], t1[1]);
                card1.x = p1[i];
                card1.y = 238;
                //
                let t2 = a2[i];
                let card2 = Card.make(t2[0], t2[1]);
                card2.x = p2[i];
                card2.y = 238;
                //
                this.moveContainer.addChild(card1);
                this.moveContainer.addChild(card2);
            }
            setTimeout(() => {

            }, 2000);
        }
    }
}

class Card extends eui.Image {
    num: number;
    type: string;
    id: string;

    public constructor(params) {
        super();
        this.num = params.num;
        this.type = params.type;
        this.id = this.num + this.type + "_png";
        //console.log(RES.getRes("1A_png"));
        RES.getResAsync(this.id).then(() => {
            this.source = RES.getRes(this.id);
            //console.log("getResAsyncCard", this.width, this.height);
        });
    }


    static make(num1: number, type: string) {
        let card = new Card({num: num1, type: type});
        return card;
    }
}