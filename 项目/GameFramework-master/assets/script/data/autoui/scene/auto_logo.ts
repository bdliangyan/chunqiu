const { ccclass } = cc._decorator;

@ccclass
export default class auto_logo extends cc.Component {
	Canvas: cc.Node;
	lbl_logo: cc.Node;

	public static URL:string = "db://assets/scene/logo.fire"

    onLoad () {
		let parent = this.node.getParent();
		this.Canvas = parent.getChildByName("Canvas");
		this.lbl_logo = this.Canvas.getChildByName("lbl_logo");

    }
}
