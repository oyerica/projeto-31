const { RevealFromBottomAndroidSpec } = require("@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs");

class Particle {
    constructor(x, y, r ) {
        var options = {
            restitution: 0.4
        }
        this.body = Bodies.circle(x, y, r , options);
        this.r = r;
        World.add(world, this.body);
        this.color = color(random(0, 225), random(0,225), random(0,225));
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle)
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, this.r, this.r);
        pop()
    }
};