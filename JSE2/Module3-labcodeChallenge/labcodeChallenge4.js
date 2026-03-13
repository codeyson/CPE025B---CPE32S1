/*
Define three classes: Point, Line, and Figure:

The Point class should have only three properties: x and y coordinates and type (always set to 'point'). The constructor takes the x and y coordinates.
The Line class should have the type property equal to 'line' and the points property, which is an array of Point class objects (points that form a line). The constructor of the constructor takes an array of point coordinates in the format [[x1, y1], [x2, y2], ...] (e.g. [[0, 0], [10, 20], [20, 20]]).
The Figure class is to allow you to create an object that is a collection of points and lines (stored in separate properties). Define the following methods:
constructor - takes an array of elements as an argument (lines and points)
addPoint - takes the x and y coordinates of the new point to add to the collection;
addLine - takes an array of line points in the format [[x1, y1], [x2, y2], ...] and adds it to the collection;
toJSON - returns the saved collection (points and lines) in JSON format;
fromJSON - takes JSON data, parses it, and adds to the collection. As an additional argument, provide a flag that specifies whether the data should be added to an existing collection or replace it;
deleteAll - deletes all data from the collection.
Test the solution on the following example:
*/
class Point {
    constructor(x, y) {
        this.type = 'point';
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(points) { // [[x, y], [], [], ...]
        this.type = 'line';
        this.points = points.map(p => new Point(p[0], p[1]));
    }
}

class Figure {
    constructor(elements = []) {
        this.addElements();
    }

    addElements(elements = []) {
        this.elements = {
            points: elements.filter(e => e.type === 'point'),
            lines: elements.filter(e => e.type === 'line')
        }        
    }

    addPoint(x, y) {
            this.elements.points.push(new Point(x, y));
    }

    addLine(points=[]) { // [[x, y], [], [], ...]
        this.elements.lines.push(new Line(points));
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(data="{}", add=false) {
        let obj = JSON.parse(data);
        if(add) {
            this.elements.points = this.elements.points.concat(obj.points||[]);
            this.elements.lines = this.elements.lines.concat(obj.lines||[]);
        } else {
            this.elements = obj;
        }
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}

let f = new Figure();
f.addPoint(10,20);
f.addPoint(10,10);
f.addLine([[10,20], [30,40], [50,60]]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);
console.log(f.elements.lines.length);