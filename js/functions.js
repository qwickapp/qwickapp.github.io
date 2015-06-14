var captionLength = 0;
var caption = "";
var lines = new Array("Snapchat👻","Annotations", "Bug reports","Feedback");
var index = 0;

$(document).ready(function()
{
	setInterval ( "cursorAnimation()", 400 );
	testTypingEffect();
});



function testTypingEffect()
{
	type();
}

function type() 
{
	if(index<lines.length)
	{
		caption = lines[index];
		$('span.caption').html(caption.substr(0, captionLength++));
		if(captionLength < caption.length+1)
		{
			setTimeout("type()", 150);
		}
		else
		{
			if(index<lines.length-1)
			{
				captionLength = caption.length;
				setTimeout("erase()", 800);
			}
			
			index++;
		}
	}
	
}

function erase()
{
	$('span.caption').html(caption.substr(0, captionLength--));
	if(captionLength >= 0)
	{
		setTimeout("erase()", 50);
	}
	else
	{
		captionLength = 0;
		caption = "";
		setTimeout("type()", 800);
	}	
}

function cursorAnimation() 
{
  $("span.cursor").animate(
  {
    opacity: 0
  }, "slow", "swing").animate(
  {
    opacity: 1
  }, "fast", "swing");
}
