class Car
{
    carNumber;
    run()
    {
        return 120;
    }
}
class MarutiSuzuki extends Car{
    run()
    {
        return super.run()+30;
    }
}
var m=new MarutiSuzuki();
m.run();
console.log(m.run());