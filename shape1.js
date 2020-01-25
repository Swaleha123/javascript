class Shape
{
    display(a)
    {
        this.area=a;
    }
}
class Circle extends Shape
{
    display(r)
    {
        this.area=3.14*r*r;
        console.log("Area is"+this.area);
    }
}
class Rectangle extends Shape{
    display(length,breadth)
    {
        this.area=length*breadth;
        console.log("area is"+this.area);
    }
}
var a=new Circle();
var b=new Rectangle();
a.display(2);
b.display(2,3);