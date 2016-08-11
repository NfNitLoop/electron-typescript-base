import * as os from "os";

function getSystemInfo() {
    let info = `System Info:
   hostname: ${os.hostname()}
    homedir: ${os.homedir()}
 endianness: ${os.endianness()}
OS platform: ${os.platform()}
    OS type: ${os.type()}
`;

    let pre = document.getElementById("systemInfo");
    pre.innerText = info;
}

window.onload = getSystemInfo;
