module ui {
    export class Alert extends eui.Component {
        public static view: Alert;
        public txt: eui.Label;
        public closeBtn: eui.Button;

        public constructor() {
            super();
            this.skinName = "resource/game_skins/AlertSkin.exml"
        }

        createChildren() {
            // this.startBtn = <eui.Button> this.skin.startBtn;
            super.createChildren();
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapClick, this);

        }

        /**
         * 显示弹出警告界面
         * @param {String} message
         */
        public static show(message: string): void {
            if (this.view == null) {
                this.view = new Alert();
            }
            this.view.txt.text = message;

        }

        private onTapClick() {
            this.parent.removeChild(this);
        }
    }

}