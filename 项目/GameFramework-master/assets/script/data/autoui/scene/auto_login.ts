const { ccclass } = cc._decorator;

@ccclass
export default class auto_login extends cc.Component {
	Canvas: cc.Node;
	lbl_title: cc.Node;
	btn_start: cc.Node;
	bg_start: cc.Node;
	lbl_start: cc.Node;

	public static URL:string = "db://assets/scene/login.fire"

    onLoad () {
		let parent = this.node.getParent();
		this.Canvas = parent.getChildByName("Canvas");
		this.lbl_title = this.Canvas.getChildByName("lbl_title");
		this.btn_start = this.Canvas.getChildByName("btn_start");
		this.bg_start = this.btn_start.getChildByName("bg_start");
		this.lbl_start = this.bg_start.getChildByName("lbl_start");

    }
}
