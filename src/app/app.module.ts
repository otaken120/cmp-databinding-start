import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [//声明属于本模块的组件，每个组件必须在且仅在一个模块中声明。
    AppComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [//引入买本模块中用到的模块，该模块是处于import语句引入的模块中
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],//声明模块中使用的服务的提供者，暂时还没有用到。
  bootstrap: [AppComponent]//根模块中的引导组件，应用启动过程中，
  //会创建这个数组中的组件并插入到HTML中，一般只有一个引导组件。组件中的4个app.component文件因此启动。
})
export class AppModule { }  //最后，使用export语句，创建模块的类并暴露出去。
//模块、组件只有暴露出去，其他的模块才能引用。
