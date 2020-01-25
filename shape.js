class Rectangle
{
 Constructor(length,width)
{
    this.l=length;
    this.w=width;
    this.n=length*width;
}
test()
{
    console.log(this.n)
}
}
class Circle
{
  Constructor(radius)
  {
      this.r=radius;
      this.m=3.14*radius*radius;
  }  
  test1()
{
    console.log(this.m)
}
}
var RecObj = new Rectangle(15,5);
RecObj.test();
var CirObj = new Circle(3);
CirObj.test1();
