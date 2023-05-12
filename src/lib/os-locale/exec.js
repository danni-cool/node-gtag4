"use strict";
// Mini wrapper around `child_process` to make it behave a little like `execa`.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execSync = exports.exec = void 0;
const node_util_1 = require("node:util");
const node_child_process_1 = __importDefault(require("node:child_process"));
const execFile = (0, node_util_1.promisify)(node_child_process_1.default.execFile);
/**
@param {string} command
@param {string[]} arguments_

@returns {Promise<import('child_process').ChildProcess>}
*/
async function exec(command, arguments_) {
    const subprocess = await execFile(command, arguments_, { encoding: 'utf8' });
    subprocess.stdout = subprocess.stdout.trim();
    return subprocess;
}
exports.exec = exec;
/**
@param {string} command
@param {string[]} arguments_

@returns {string}
*/
function execSync(command, arguments_) {
    return node_child_process_1.default.execFileSync(command, arguments_, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
}
exports.execSync = execSync;
//# sourceMappingURL=exec.js.map