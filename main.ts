/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace STEM {
    /**
     * Checks if the goal is reached by looking for the Gold Block direction down to agent
     */
    //% blockId=send_message3 block="send message3"
    //% weight=30
    export function sendMessage3(): string {
        let resp = net.request("GET", "http://www.baidu.com");
        return resp.text();
    }
}