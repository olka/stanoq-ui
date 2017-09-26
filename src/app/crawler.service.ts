import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, EventEmitter} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TreeModel} from 'ng2-tree';

declare var oboe: any;

@Injectable()
export class CrawlerService {
  private host = 'https://stanoq.herokuapp.com'//'http://localhost:9000'
  private versionURL = this.host + '/version';
  private crawlerURL = this.host + '/crawlerStream';

  data: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [ {value: 'Java'},  {value: 'C++'}, {value: 'C#'}] },
      {
        value: 'Prototype-based programming',
        children: [ {value: 'JavaScript'}, {value: 'CoffeeScript'}, {value: 'Lua'}]
      }
    ]
  };
  options: any = this.getOptions(
    {
      'nodes': [{
        'url': '1', 'timeToLoad': 10, 'category': 'green', 'size': 10000
      }, {
        'url': '2', 'timeToLoad': 15, 'category': 'green', 'size': 10000
      }, {
        'url': '3', 'timeToLoad': 20, 'category': 'yellow', 'size': 10000
      }, {
        'url': '4', 'timeToLoad': 20, 'category': 'red', 'size': 10000
      }],
      'links': [{
        'source': '1', 'target': '2'
      }, {
        'source': '3', 'target': '4'
      }, {
        'source': '4', 'target': '1'
      }]
    }
  );

  dataProvider = new BehaviorSubject(this.data);
  graphProvider = new BehaviorSubject(this.options);
  dataSub: Subscription;
  graphSub: Subscription;
  dataProviderObservable = this.dataProvider.asObservable();
  graphObservable = this.graphProvider.asObservable();
  private oboeService: any;


  constructor(private http: HttpClient) {
    this.dataSub = this.dataProviderObservable.subscribe(data => this.data = data);
    this.graphSub = this.dataProviderObservable.subscribe(opts => this.options = opts);
  }

  getVersion() {
    return this.http.get(this.versionURL).toPromise()
      .catch(this.handleError);
  }

  getOboeConfig(url: String, depth: Number) {
    const rawData = {
      'url': url,
      'depthLimit': depth,
      'timeout': 5,
      'exclusions': ['test1', 'test2']
    };

    const data = JSON.stringify(rawData);

    const config = {
      'url': this.crawlerURL,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data,
      cached: false,
      withCredentials: false
    };
    return config;
  }

  getSiteTree(url: String, depth: Number) {
    const echartEmitter = new EventEmitter();
    const treeEmitter = new EventEmitter();
    this.oboeService = oboe(this.getOboeConfig(url, depth));
    this.data = this.oboeService
      .node('echart', function (el) {
        echartEmitter.emit(el);
        return oboe.drop;
      })
      .node('node', function (el) {
        treeEmitter.emit(el);
        return oboe.drop;
      })
      .fail(function (errorReport) {
        console.log(errorReport);
      });
    treeEmitter.subscribe(el => this.dataProvider.next(el));
    echartEmitter.subscribe(el => this.graphProvider.next(this.getOptions(el)));
    return null;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getOptions(data: any) {
    const initialSize = data.nodes[0].size;
    const urlLength = data.nodes[0].url.length - 1;
    const categories = [{name: 'green'}, {name: 'yellow'}, {name: 'red'}];
    return {
      animationDurationUpdate: 200,
      tooltip: {
        backgroundColor: '#008CBA'
      },
      legend: [{
        orient: 'vertical',
        left: 'left',
        top: 'bottom',
        icon: 'circle',
        data: [{ name: 'green', inactiveColor: '#749f83'},
          { name: 'yellow', inactiveColor: '#ca8622'},
          { name: 'red', inactiveColor: '#008CBA'}]
      }],
      series: [{
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true
        },
        focusNodeAdjacency: true,
        legendHoverLink: true,
        hoverAnimation: true,
        categories: categories,
        animation: true,
        data: data.nodes.map(function (node) {
          return {
            value: node.timeToLoad,
            name: node.url,
            categories: categories,
            category: node.category,
            symbolSize: ((node.size / initialSize) * 6) + 4,
            itemStyle: {
              normal: {
                color: node.color
              }
            }
          };
        }),
        // edges: data.links,
        edges: data.links.map(function (link){
          return {
            source: link.source,
            target: link.target
          };
        }),
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 5],
        roam: false,
        label: {
          emphasis: {
            position: 'right',
            formatter: '{c0}',
            show: true
          },
          normal: {
            position: 'right',
            formatter: '{a0}:{c0}',
            show: true
          }
        },
        lineStyle: {
          normal: {
            color: 'source',
            curveness: 0.35
          }
        }
      }]
    };
  }

}
