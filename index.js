var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ROILAssociateFileTypeOriginal = /** @class */ (function (_super) {
    __extends(ROILAssociateFileTypeOriginal, _super);
    function ROILAssociateFileTypeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ROILAssociateFileTypeOriginal.prototype.setFileHandler = function (handler) { return cordova(this, "setFileHandler", { "sync": true }, arguments); };
    ROILAssociateFileTypeOriginal.pluginName = "ROILAssociateFileType";
    ROILAssociateFileTypeOriginal.plugin = "cordova-plugin-roil-associate-file-type";
    ROILAssociateFileTypeOriginal.pluginRef = "cordova.plugins.ROILAssociateFileType";
    ROILAssociateFileTypeOriginal.repo = "";
    ROILAssociateFileTypeOriginal.platforms = ["Android", "iOS"];
    return ROILAssociateFileTypeOriginal;
}(IonicNativePlugin));
var ROILAssociateFileType = new ROILAssociateFileTypeOriginal();
export { ROILAssociateFileType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvaWwtYXNzb2NpYXRlLWZpbGUtdHlwZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QjdCLHlDQUFpQjs7OztJQVExRCw4Q0FBYyxhQUFDLE9BQW9DOzs7Ozs7Z0NBakRyRDtFQXlDMkMsaUJBQWlCO1NBQS9DLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgUk9JTEFzc29jaWF0ZUZpbGVUeXBlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBST0lMQXNzb2NpYXRlRmlsZVR5cGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JvaWwtYXNzb2NpYXRlLWZpbGUtdHlwZSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9pbEFzc29jaWF0ZUZpbGVUeXBlOiBST0lMQXNzb2NpYXRlRmlsZVR5cGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnJvaWxBc3NvY2lhdGVGaWxlVHlwZS5zZXRGaWxlSGFuZGxlcihmaWxlID0+IGNvbnNvbGUubG9nKGZpbGUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdST0lMQXNzb2NpYXRlRmlsZVR5cGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1yb2lsLWFzc29jaWF0ZS1maWxlLXR5cGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuUk9JTEFzc29jaWF0ZUZpbGVUeXBlJyxcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUk9JTEFzc29jaWF0ZUZpbGVUeXBlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gaGFuZGxlciB7RnVuY3Rpb259IEhhbmRsZXIgdGhhdCBnZXRzIGNhbGxlZCB3aGVuIHRoZSBhcHAgdHJpZXMgdG8gb3BlbiBhIGZpbGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIHNldEZpbGVIYW5kbGVyKGhhbmRsZXI6IChmaWxlOiBBcnJheUJ1ZmZlcikgPT4gdm9pZCk6IHZvaWQgeyB9XG59XG4iXX0=