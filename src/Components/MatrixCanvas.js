import React, {Component} from 'react';

import styled from 'styled-components';

class MatrixCanvas extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  rows = [];
  canvas = null;
  ctx = null;
  lastUpdate = 0;
  allChars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  setCanvasSize = (canvas) => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  };

  drawLetter = (letter, x, y) => {
    this.ctx.font = '10px monospace';
    this.ctx.fillStyle = 'green';
    this.ctx.fillText(letter, x, y);
  };

  createRows = () => {
    const numberOfRows = this.canvas.width / 10;
    for (let i = 0; i < numberOfRows; i++) {
      const x = i * 10;
      const y = Math.random() * -1000;
      const letter = this.randomChar();
      const row = {letter, x, y};
      this.rows.push(row);
    }
  };

  randomChar = () => {
    const char = this.allChars[
      Math.floor(Math.random() * this.allChars.length)
    ];
    return char;
  };

  updateRows = () => {
    this.rows.forEach((row) => {
      row.letter = this.randomChar();
      if (row.y > this.canvas.height) {
        row.y = Math.random() * -1000;
      } else {
        row.y += 15;
      }
    });
  };

  matrixRain = (number) => {
    this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    if (number > this.lastUpdate + 50) {
      this.updateRows();
      this.lastUpdate = number;
    }

    this.rows.forEach((row) => {
      this.drawLetter(row.letter, row.x, row.y);
    });
    requestAnimationFrame(this.matrixRain);
  };

  handleResize = () => {
    this.setCanvasSize(this.canvas);
    this.rows = [];
    this.createRows();
  };

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.setCanvasSize(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.createRows();
    this.matrixRain();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.cancelAnimationFrame(this.matrixRain);
  }

  Canvas = styled.canvas`
     {
      display: block;
      width: 100vw;
      height: 100vh;
    }
  `;

  render() {
    return <this.Canvas ref={this.canvasRef}></this.Canvas>;
  }
}

export default MatrixCanvas;
