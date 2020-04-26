import IDataModel from "../IDataModel";

export default class UserModel extends IDataModel {
    is_open_music: boolean = false;
    is_open_sound: boolean = false;

    constructor() {
        super('User');

        // this.Set('music_state', 1);
        // this.Set('sound_state', 1);
        // this.Save();
    }

    getMessageListeners() {
        return {
        }
    }
}