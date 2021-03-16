import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as d3 from "d3";
@Component({
  selector: 'app-svgcomp',
  templateUrl: './svgcomp.component.html',
  styleUrls: ['./svgcomp.component.css']
})
export class SvgcompComponent implements AfterViewInit {

  // private elementRef: ElementRef ;

  // constructor(elementRef: ElementRef) {
  //   this.elementRef = elementRef;
  //  }

  constructor(){}

  ngAfterViewInit(): void {

    console.log("Inside after view init");
    // create svg element:
    var svg = d3.select("body").append("svg").attr("width", 330).attr("height", 190)

    // Add the path using this helper function
    svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 330)
    .attr('height', 190)
    .attr('stroke', '#e5e5e5')
    .attr('fill', 'white')
    .attr('stroke-width',2);

    svg.append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 310)
    .attr('height', 170)
    .attr('fill', '#ffffd9');

    svg.append('text')
    .attr('x', 125)
    .attr('y', 60)
    .attr('stroke', '#818080')
    .style("fill", '#818080')
    .style("font-family", "'Raleway', sans-serif")
    .style("font-weight", 'bolder')
    .style("font-size", 35)
    .text("TEST")

    svg.append('line')
    .attr('x1', 40)
    .attr('y1', 85)
    .attr('x2', 290)
    .attr('y2', 85)
    .attr('stroke', '#b2b2b2')
    .attr('stroke-width', 2)

    svg.append('text')
    .attr('x', 90)
    .attr('y', 120)
    .style("fill", '#b3b3b3')
    .style("font-family", "'Raleway', sans-serif")
    .style("font-weight", 'bold')
    .text("Dollar sales: $3000")

    svg.append('text')
    .attr('x', 98)
    .attr('y', 142)
    .style("fill", '#b3b3b3')
    .style("font-family", "'Raleway', sans-serif")
    .style("font-weight", 'bold')
    .text("Unit sales: $4000")



    // var element = this.elementRef.nativeElement;
    // var svg = element.querySelector( "svg" );
    // var svgViewBox = `0 0 330 190`;
    // svg.setAttribute( "viewBox", svgViewBox );
    // svg.setAttribute("width",330);
    // svg.setAttribute("height",190);
    // svg.setAttribute("version",1.1);

    // var orect = svg.querySelector( ".outerrect" );
    // orect.setAttribute("x",0);
    // orect.setAttribute("y",0);
    // orect.setAttribute("width",330);
    // orect.setAttribute("height",190);
    // orect.setAttribute("fill","white");
    // orect.setAttribute("stroke","#e5e5e5");
    // orect.setAttribute("stroke-width",2);

    // var irect = svg.querySelector( ".innerrect" );
    // irect.setAttribute("x",10);
    // irect.setAttribute("y",10);
    // irect.setAttribute("width",310);
    // irect.setAttribute("height",170);
    // irect.setAttribute("fill","#ffffd9");

    // var line = svg.querySelector( "line" );
    // line.setAttribute("x1",40);
    // line.setAttribute("y1",85);
    // line.setAttribute("x2",290);
    // line.setAttribute("y2",85);
    // line.setAttribute("stroke","#b2b2b2");
    // line.setAttribute("stroke-width",2);

    // var test = svg.querySelector( "text" );
    // test.setAttribute("x",125);
    // test.setAttribute("y",60);
    // svg.querySelector("text").style.fill = "#818080";
    // svg.querySelector("text").style.fontFamily = "'Raleway', sans-serif";
    // svg.querySelector("text").style.fontWeight = "bolder";
    // svg.querySelector("text").style.fontSize = "35px";


    // var dollar = svg.querySelector( ".dollar" );
    // dollar.setAttribute("x",90);
    // dollar.setAttribute("y",120);
    // svg.querySelector(".dollar").style.fill = "#b3b3b3";
    // svg.querySelector(".dollar").style.fontFamily = "'Raleway', sans-serif";
    // svg.querySelector(".dollar").style.fontWeight = "bold";

    // var unit = svg.querySelector( ".unit" );
    // unit.setAttribute("x",98);
    // unit.setAttribute("y",142);
    // svg.querySelector(".unit").style.fontFamily = "'Raleway', sans-serif";
    // svg.querySelector(".unit").style.fill = "#b3b3b3";
    // svg.querySelector(".unit").style.fontWeight = "bold";
    
    
  }

}
