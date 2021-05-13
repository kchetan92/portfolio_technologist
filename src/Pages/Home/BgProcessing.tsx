import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import Sketch from "react-p5";
import p5Types from "p5";
import { sign } from "crypto";

const margin = 50;
const separationAmplitude = 10;
const distanceBetweenPoints = 40;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  canvas {
    z-index: 0;
  }
`;

class Point {
  x: number;
  y: number;

  constructor(p5: p5Types, x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(p5: p5Types) {
    const distance = p5.dist(this.x, this.y, p5.mouseX, p5.mouseY);

    if (distance > 100 && distance < 250) {
      const skewAngle = p5.atan2(p5.mouseY - this.y, p5.mouseX - this.x);
      const separationAngle = p5.map(distance, 100, 250, 0, p5.PI);

      const separationX =
        separationAmplitude * p5.sin(separationAngle) * p5.cos(skewAngle);
      const separationY =
        separationAmplitude * p5.sin(separationAngle) * p5.sin(skewAngle);

      p5.fill("rgb(65, 190, 170)");
      p5.circle(this.x + separationX, this.y + separationY, 3);
      p5.fill("rgb(71, 65, 189)");
      p5.circle(this.x - separationX, this.y - separationY, 3);
    } else {
      p5.fill("rgb(199, 199, 199)");
      p5.circle(this.x, this.y, 3);
    }
  }
}

const Background = () => {
  const allPoints: Point[] = [];
  const [sketch, setSketch] = useState<JSX.Element>(<></>);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container && container.current) {
      const setupOne = (p5: p5Types, parentRef: Element) => {
        const container = parentRef.closest(".parent-container");
        if (container) {
          const { height, width } = container.getBoundingClientRect();

          p5.createCanvas(width, height).parent(parentRef);
          p5.frameRate(60);
          p5.noStroke();

          const reducedHeight = height - margin * 2;
          const reducedWidth = width - margin * 2;

          const dotsAlongHeight = Math.floor(
            reducedHeight / distanceBetweenPoints
          );
          const dotsAlongWidth = Math.floor(
            reducedWidth / distanceBetweenPoints
          );

          const extraHeightMargin =
            reducedHeight - dotsAlongHeight * distanceBetweenPoints;
          const extraWidthMargin =
            reducedWidth - dotsAlongWidth * distanceBetweenPoints;

          for (let i = 0; i < dotsAlongWidth; i++) {
            const x = i * distanceBetweenPoints + margin + extraWidthMargin / 2;
            for (let j = 0; j < dotsAlongHeight; j++) {
              const y =
                j * distanceBetweenPoints + margin + extraHeightMargin / 2;
              allPoints.push(new Point(p5, x, y));
            }
          }
        }
      };

      const drawOne = (p5: p5Types) => {
        p5.clear();
        allPoints.forEach((pt) => pt.draw(p5));
      };

      const sketch = <Sketch setup={setupOne} draw={drawOne} />;

      setSketch(sketch);
    }
  }, [container]);

  return (
    <Container className="parent-container" ref={container}>
      {sketch}
    </Container>
  );
};

export default Background;
