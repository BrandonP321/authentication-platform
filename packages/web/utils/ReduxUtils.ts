import { Responsive } from "@Slices/responsive/responsive"

export class ReduxUtils {
    public static initializeStores = () => {
        Responsive.startDataStoreListeners();
    }

    public static destroyStores = () => {
        Responsive.destoryStoreListeners();
    }
}