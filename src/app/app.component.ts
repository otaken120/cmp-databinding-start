import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//创建的组件的名字，就像HTML标签的名字一样
  templateUrl: './app.component.html',//HTML模板，使用相对路径，./表示这个组件文件所在的当前目录，
  styleUrls: ['./app.component.css']//HTML模板使用的样式表，可以有多个。
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content:'Just a test!'}];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
       type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent
     }); 
   }
 
   onBlueprintAdded(blueprintData) {
     this.serverElements.push({
       type: 'blueprint',
      name: blueprintData.ServerName,
       content: blueprintData.ServerContent
     }); 
   }

  
}
