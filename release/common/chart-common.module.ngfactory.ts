/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/common/chart-common.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../../../src/common/axes/axes.module';
import * as import4 from '../../../src/common/tooltip/tooltip.module';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '../../../src/services/injection.service';
import * as import7 from '../../../src/common/tooltip/tooltip.service';
import * as import8 from '@angular/core/src/di/injector';
import * as import9 from './tooltip/tooltip.component.ngfactory';
import * as import10 from '@angular/core/src/i18n/tokens';
import * as import11 from '@angular/core/src/application_ref';
class ChartCommonModuleInjector extends import0.NgModuleInjector<import1.ChartCommonModule> {
  _CommonModule_0:import2.CommonModule;
  _AxesModule_1:import3.AxesModule;
  _TooltipModule_2:import4.TooltipModule;
  _ChartCommonModule_3:import1.ChartCommonModule;
  __NgLocalization_4:import5.NgLocaleLocalization;
  __InjectionService_5:import6.InjectionService;
  __TooltipService_6:import7.TooltipService;
  constructor(parent:import8.Injector) {
    super(parent,[import9.TooltipContentComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_4():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == null)) { (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import10.LOCALE_ID))); }
    return this.__NgLocalization_4;
  }
  get _InjectionService_5():import6.InjectionService {
    if ((this.__InjectionService_5 == null)) { (this.__InjectionService_5 = new import6.InjectionService(this.parent.get(import11.ApplicationRef),this,this)); }
    return this.__InjectionService_5;
  }
  get _TooltipService_6():import7.TooltipService {
    if ((this.__TooltipService_6 == null)) { (this.__TooltipService_6 = new import7.TooltipService(this._InjectionService_5)); }
    return this.__TooltipService_6;
  }
  createInternal():import1.ChartCommonModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._AxesModule_1 = new import3.AxesModule();
    this._TooltipModule_2 = new import4.TooltipModule();
    this._ChartCommonModule_3 = new import1.ChartCommonModule();
    return this._ChartCommonModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.AxesModule)) { return this._AxesModule_1; }
    if ((token === import4.TooltipModule)) { return this._TooltipModule_2; }
    if ((token === import1.ChartCommonModule)) { return this._ChartCommonModule_3; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_4; }
    if ((token === import6.InjectionService)) { return this._InjectionService_5; }
    if ((token === import7.TooltipService)) { return this._TooltipService_6; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ChartCommonModuleNgFactory:import0.NgModuleFactory<import1.ChartCommonModule> = new import0.NgModuleFactory(ChartCommonModuleInjector,import1.ChartCommonModule);