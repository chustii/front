import {ChangeDetectorRef} from "@angular/core";

export class TranslateServiceMock {

  changeLanguage() {

  }
  getText(value:string) {
    return 'mock';
  }
}
export class ChangeDetection extends ChangeDetectorRef {
    override markForCheck(): void {
        throw new Error("Method not implemented.");
    }
    override detach(): void {
        throw new Error("Method not implemented.");
    }
    override detectChanges(): void {
        throw new Error("Method not implemented.");
    }
    override checkNoChanges(): void {
        throw new Error("Method not implemented.");
    }
    override reattach(): void {
        throw new Error("Method not implemented.");
    }

}
