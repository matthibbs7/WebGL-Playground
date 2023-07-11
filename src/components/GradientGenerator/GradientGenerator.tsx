/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gradient } from '../Gradient'
import { useEffect } from "react";

// Create your instance


export const GradientGenerator = () => {
// Call `initGradient` with the selector to your canvas
  useEffect(() => {
    const canvasElement = document.getElementById("gradient-canvas");
    const gradient: any = new Gradient();
    if (canvasElement) {
        gradient.initGradient("#gradient-canvas");
    } else {
        gradient.pause();
    }
  }, []);
  return (
    <div style={{width: '600px', height: '400px'}}>
        <canvas id="gradient-canvas" data-transition-in />
    </div>
  );
}
