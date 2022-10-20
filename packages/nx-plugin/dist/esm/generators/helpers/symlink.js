import { symlinkSync } from 'fs';
import { join } from 'path';
export var symlinkVsCodeConfiguration = function symlinkVsCodeConfiguration(options) {
  var relativePath = join(options.offsetFromRoot, 'commonConfiguration/.vscode');
  symlinkSync(relativePath, join(options.packageRoot, '.vscode'), 'dir');
};
//# sourceMappingURL=symlink.js.map