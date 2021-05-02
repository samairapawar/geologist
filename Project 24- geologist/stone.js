class Stone{

	constructor(x,y,w)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.w=w

		var options={
			restitution:0.3,
			friction: 0.5,
			density:1
	
		}
		this.body=Bodies.circle(this.x, this.y, (this.w-0)/2, options)
		World.add(world, this.body);

		
	}
	display()
	{
			push ()
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipseMode(RADIUS)
			ellipse (this.body.position.x,this.body.position.y,this.w,this.w)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}