import {NgModule} from "@angular/core";
import {HyMatFabSpeedDialTrigger, HyMatFabSpeedDialActions, HyMatFabSpeedDialComponent} from "./fab-speed-dial";

export * from './fab-speed-dial';

const COMPONENTS = [
    HyMatFabSpeedDialTrigger,
    HyMatFabSpeedDialActions,
    HyMatFabSpeedDialComponent
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class HyMatFabSpeedDialModule {}