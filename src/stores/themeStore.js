import { action, computed, decorate, observable } from "mobx";

class themeStore {
    showCartSidebar = "close";
   
    get model() {
        return {
            showCartSidebar: this.showCartSidebar,
        };
    }

    updateStore(object) {
        this.showCartSidebar = object.showCartSidebar ? object.showCartSidebar : this.showCartSidebar;
    }

}

decorate(themeStore, {
    showCartSidebar: observable,
    model: computed,
    updateStore: action,
});

export default themeStore; 