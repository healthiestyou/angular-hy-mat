import {NgModule} from "@angular/core";
import {SmdFabSpeedDialTrigger, SmdFabSpeedDialActions, SmdFabSpeedDialComponent} from "./smd-fab-speed-dial";

export * from './smd-fab-speed-dial';

const COMPONENTS = [
    SmdFabSpeedDialTrigger,
    SmdFabSpeedDialActions,
    SmdFabSpeedDialComponent
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SmdFabSpeedDialModule {}