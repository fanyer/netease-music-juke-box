import View from "../../nju/view/View";

export default class PlayListView extends View {
    init() {
        super.init();
        this._track = null;
        this.addStyleClass("nm-player-view");
    }

    getElementTag() {
        // TODO div
        return "span";
    }

    get track() {
        return this._track;
    }

    set track(value) {
        if(value !== this.track) {
            this._track = value;
            this.renderTrack();
        }
    }

    renderTrack() {
        this.$element.text(this.track.name);
    }
}
