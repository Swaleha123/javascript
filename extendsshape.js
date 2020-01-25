class Shape
{
    constructor(k)
    {
        this.k=k;
    }
    test()
    {
        console.log("area is");
        

    }
}
    class Rectangle extends Shape
{
    constructor(length,breadth) {
        super()
        this.length=length;
        this.breadth=breadth;
        
    }
    test()
    {
        console.log("area of rectangle is"+this.length*this.breadth);
    }
}
    
    var obj=new Rectangle(2,8);
    obj.test();
    class Circle extends Shape
{
    constructor(r) {  
        super()
        this.r=r;
        
    }

    test()
    {

    
        console.log("area of circle is"+3.14*this.r*this.r);
    }
}
        
    var obj1=new Circle(2);
    obj1.test();

      
