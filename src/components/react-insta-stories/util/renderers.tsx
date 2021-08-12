import {Renderer, Story, Tester} from "../interfaces";
import {log} from "../../util";

export const getRenderer = (story: Story, renderers: { renderer: Renderer, tester: Tester }[]): Renderer => {
    let probable = renderers.map(renderer => {
        let ret = {
            ...renderer,
            testerResult: renderer.tester(story)
        }
        // log(ret)
        return ret
    }).filter(r => r.testerResult.condition);
    probable.sort((a, b) => b.testerResult.priority - a.testerResult.priority);
    // console.log(probable[0].renderer)
    return probable[0].renderer;
}