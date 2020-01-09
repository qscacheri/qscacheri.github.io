var container = document.getElementById("piet-container")
var colorPallete = [];
var rectangles = [];

var lineWidth = 10;
var painting;

var frameImage;

function preload()
{
    frameImage = loadImage("images/frame2.jpg");
}

function setup()
{
    colorPallete.push(color('#CE0406'));
    colorPallete.push(color('#DDC505')),
    colorPallete.push(color('#06136D'));
    colorPallete.push(color('#000000'));
    colorPallete.push(color('#ffffff'));
    colorPallete.push(color('#ffffff'));
    colorPallete.push(color('#ffffff'));
    colorPallete.push(color('#ffffff'));

    var canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent("piet-container")
    var widthRatio = width / 910;
    var heightRatio = height / 607;

    painting = new Painting(widthRatio * (700 / 2), heightRatio * (84 / 2), widthRatio * (456 / 2), heightRatio * (750 / 2));
    lineWidth = height / 100;
}

function windowResized()
{
    resizeCanvas(container.offsetWidth, container.offsetHeight);
    var widthRatio = width / 910;
    var heightRatio = height / 607;
    lineWidth = height / 100;
    painting = new Painting(widthRatio * (700 / 2), heightRatio * (84 / 2), widthRatio * (456 / 2), heightRatio * (750 / 2));

}

function draw()
{
    background(255);
    noFill();
    strokeWeight(lineWidth);
    rect(lineWidth / 2, lineWidth / 2, width - lineWidth, height - lineWidth);
    image(frameImage, 0, 0, width, height);
    painting.draw();
}

function mousePressed()
{
    var widthRatio = width / 910;
    var heightRatio = height / 607;
    painting = new Painting(widthRatio * (700 / 2), heightRatio * (84 / 2), widthRatio * (456 / 2), heightRatio * (750 / 2));
}

class Rectangle
{
    constructor(x, y, width, height)
    {

        if (typeof(x.x) == 'undefined')
        {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = colorPallete[Math.floor(random(colorPallete.length))];

            this.right = this.x + this.width;
            this.bottom = this.y + this.height;
        }

        else {
            this.x = x.x;
            this.y = x.y;
            this.width = x.width;
            this.height = x.height;
            this.color = x.color;

            this.right = this.x + this.width;
            this.bottom = this.y + this.height;

        }

        this.currentX = random(1) > .5 ? random(0, -1000) : random(this.width, this.width + 1000);
        this.currentY = random(1) > .5 ? random(0, -1000) : random(this.height, this.height + 1000);

        this.speedX = this.currentX > this.x ? -10 : 10;
        this.speedY = this.currentY > this.Y ? -10 : 10;

    }

    translate(x, y)
    {
        this.x += x;
        this.y += y;
        this.right = this.x + this.width;
        this.bottom = this.y + this.height;
    }

    draw()
    {
        strokeWeight(lineWidth);
        fill(this.color);
        rect(this.currentX, this.currentY, this.width, this.height);

        if (this.currentX + this.speedX > this.x && this.speedX > 0)
        {
            this.currentX += this.x - this.currentX;
        }

        else if (this.currentX + this.speedX < this.x && this.speedX < 0)
        {
            this.currentX += this.x - this.currentX;
        }

        else {
            this.currentX += this.speedX;
        }



        if (this.currentY + this.speedY > this.y)
        {
            this.currentY += this.y - this.currentY;
        }

        else if (this.currentY + this.speedY < this.y && this.speedY < 0)
        {
            this.currentY += this.y - this.currentY;
        }

        else {
            this.currentY += this.speedY;
        }

    }

    divideInTwo()
    {
        var newRects = [];
        var width1 = this.width * random(.1, .85);
        var width2 = this.width - width1;
        newRects.push(new Rectangle(this.x, this.y, width1, this.height))
        newRects.push(new Rectangle(this.x + width1, this.y, width2, this.height));
        return newRects;
    }
}

class Painting
{
    constructor(x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

        // rectangles to be painted
        this.rectangles = [];

        // divide painting into some number of sub rectangles of different sizes
        this.subAreas = [];
        var xPos = this.x;
        while (xPos != this.x + this.width)
        {
            console.log("dividing into sub areas");
            var sliceWidth = random(this.width / 5, this.width / 3);
            if (xPos + sliceWidth > this.x + this.width)
            {
                sliceWidth = (this.x + this.width) - xPos;
                this.subAreas.push(new Rectangle(xPos, this.y, sliceWidth, this.height));
                console.log("last one");
            }
            else {
                this.subAreas.push(new Rectangle(xPos, this.y, sliceWidth, this.height));
            }

            xPos += sliceWidth;
        }


        for (var i = 0; i < this.subAreas.length; i++){
            var yPos = this.y;
            xPos = this.subAreas[i].x;
            var currentWidth = this.subAreas[i].width;
            var tempRect = new Rectangle(xPos, yPos, currentWidth, this.height * random(.1, .35));
            this.rectangles.push(new Rectangle(tempRect));
            tempRect.translate(0, tempRect.height);
            yPos = tempRect.y;
            while (yPos != this.height)
            {
                var shouldDivide = random(1) >= .5 ? true: false;

                var currentHeight = this.height / random(5, 8);
                if (yPos + currentHeight > this.height)
                {
                    console.log("last one again");
                    currentHeight = this.height - yPos;
                    tempRect = new Rectangle(xPos, yPos, currentWidth, currentHeight);
                }
                else {
                    tempRect = new Rectangle(xPos, yPos, currentWidth, currentHeight);
                }

                if (shouldDivide)
                {
                    var newRects = tempRect.divideInTwo();
                    for (var j = 0; j < newRects.length; j++)
                    {
                        this.rectangles.push(new Rectangle(newRects[j]));
                    }
                }

                else {
                    this.rectangles.push(new Rectangle(tempRect))
                }

                tempRect.translate(0, currentHeight);
                yPos = tempRect.y;
            }
        }
    }

    draw()
    {
        for (var i = 0; i < this.rectangles.length; i++)
        {
            this.rectangles[i].draw();
        }
    }
}
