import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CrawlerService}from './crawler.service';
import {Subscription} from 'rxjs/Subscription';
import { TreeModel, NodeEvent, NodeRenamedEvent } from 'ng2-tree';

declare const alertify: any;
declare var window: Window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version:any;
  isSpinnerVisible:any;
  dataSub:Subscription;
  graphSub:Subscription;
  siteNameSub:Subscription;
  data: TreeModel;
  chartOption: any;
  siteName: any;
  domain: string;
  depth: string;
  error = {};

  constructor(private service: CrawlerService) {
        console.log('constructor')
    }

    ngOnInit() {
        this.dataSub = this.service.dataProviderObservable.subscribe(data => this.data = data);
        this.graphSub = this.service.graphObservable.subscribe(options => this.chartOption = options);
        this.siteNameSub = this.service.siteNameObservable.subscribe(name => this.siteName = name);
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
        this.graphSub.unsubscribe();
        this.siteNameSub.unsubscribe();
    }

    getVersion(){
        this.service.getVersion().then(data => this.version = data.version).catch(error => this.error = error);
    }

    getSiteTree(domain: string, depth: string){
        this.service.getSiteTree(String(domain), Number(depth));
    }

   public logEvent(e: NodeEvent): void {
     //window.open(String(e.node.node.id));
     alertify.message(`${e.node.value}`);
  }

  public renamedEvent(e: NodeRenamedEvent): void {
     this.data.value = e.newValue;
     alertify.message(`${e.node.value}`);
  }
}
