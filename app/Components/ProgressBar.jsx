import React from "react";
import "../Styles/Home.css";


function Filler(props) {
    return (
      <div className="filler" >
      </div>
    );
  }
function ProgressBar(props) {
    const getGradientColor = (percentage) => {
        // Base RGB values for green and red
        const baseRed = 255;
        const baseGreen = 255;
        const baseBlue = 100; 
    
        // Calculate intermediate color based on percentage
        const red = percentage > 50 ? baseRed * (100 - percentage) / 50 : baseRed;
        const green = percentage < 50 ? baseGreen * percentage / 50 : baseGreen;
    

        const whiteBlendFactor = 0.4; // Adjust this to control how much to wash out the colors
        const washedRed = red + (255 - red) * whiteBlendFactor;
        const washedGreen = green + (255 - green) * whiteBlendFactor;
        const washedBlue = baseBlue + (255 - baseBlue) * whiteBlendFactor;
    
        return `rgb(${Math.round(washedRed)}, ${Math.round(washedGreen)}, ${Math.round(washedBlue)})`;
      };
      const color = getGradientColor(props.percentage);
  return (
    <div className="progress-bar" id="JSPorgress" >
    <div className="filler" style={{ width: `${props.percentage}%`, backgroundColor: color }}>
        
      </div>
    </div>
   
  );
}
export default ProgressBar;