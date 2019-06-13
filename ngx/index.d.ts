import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name ROILAssociateFileType
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ROILAssociateFileType } from '@ionic-native/roil-associate-file-type';
 *
 *
 * constructor(private roilAssociateFileType: ROILAssociateFileType) { }
 *
 * ...
 *
 *
 * this.roilAssociateFileType.setFileHandler(file => console.log(file));
 *
 * ```
 */
export declare class ROILAssociateFileType extends IonicNativePlugin {
    /**
     * @param handler {Function} Handler that gets called when the app tries to open a file
     */
    setFileHandler(handler: (file: ArrayBuffer) => void): void;
}
