class Rubber{

	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction: 0.5,
			density:1
	
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20), options)
		World.add(world, this.body);

		
	}
	display()
	{
		
		
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

	}

}