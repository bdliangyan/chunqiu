const { ccclass } = cc._decorator;

@ccclass
export default class auto_gem extends cc.Component {
	gem: cc.Node;
	Background: cc.Node;
	Label: cc.Node;

	public static URL:string = "db://assets/resources/prefab/item/gem.prefab"

    onLoad () {
		this.gem = this.node
		this.Background = this.gem.getChildByName("Background");
		this.Label = this.Background.getChildByName("Label");

    }
}
