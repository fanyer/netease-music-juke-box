import ListView from "./ListView"

export default class TableView extends ListView {
    init() {
        super.init();
        this.removeStyleClass("nju-list-view");
        this.addStyleClass("nju-table-view");
    }

    getElementTag() {
        return "table";
    }

    getItemElementTag() {
        return "tr";
    }

    _initLayout() {
        this.$head = $(`<thead />`);
        this.$headItem = this.$createHeadItem();
        this.renderHeadItem();
        this.$head.append(this.$headItem);
        this.$element.append(this.$head);

        this.$container = $(`<tbody />`);
        this.$element.append(this.$container);
    }

    $createHeadItem() {
        return this.$createNewItem();
    }
}
