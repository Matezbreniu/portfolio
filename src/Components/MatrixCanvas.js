import React, {useEffect, useRef} from 'react';

import styled from 'styled-components';

const Canvas = styled.canvas`
	display: block;
	width: 100vw;
	height: 100vh;
`;

const allChars = [
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

const MatrixCanvas = () => {
	const canvasRef = useRef();

	const setCanvasSize = (canvas) => {
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
	};

	const drawLetter = (ctx, letter, x, y) => {
		ctx.font = '10px monospace';
		ctx.fillStyle = 'green';
		ctx.fillText(letter, x, y);
	};

	const createRows = (canvas, rows) => {
		const numberOfRows = canvas.width / 10;
		for (let i = 0; i < numberOfRows; i++) {
			const x = i * 10;
			const y = Math.random() * -1000;
			const letter = randomChar();
			const row = {letter, x, y};
			rows.push(row);
		}
	};

	const randomChar = () => {
		const char = allChars[Math.floor(Math.random() * allChars.length)];
		return char;
	};

	const updateRows = (canvas, rows) => {
		rows.forEach((row) => {
			row.letter = randomChar();
			if (row.y > canvas.height) {
				row.y = Math.random() * -1000;
			} else {
				row.y += 15;
			}
		});
	};

	const matrixRain = (canvas, ctx, lastUpdate, rows) => {
		ctx.fillStyle = 'rgba(0,0,0,0.05)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		const number = Date.now();
		if (number > lastUpdate + 50) {
			updateRows(canvas, rows);
			lastUpdate = number;
		}

		rows.forEach((row) => {
			drawLetter(ctx, row.letter, row.x, row.y);
		});
		requestAnimationFrame(() => matrixRain(canvas, ctx, lastUpdate, rows));
	};

	const handleResize = (canvas, rows) => {
		setCanvasSize(canvas);
		rows = [];
		createRows(canvas, rows);
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		let rows = [];
		let lastUpdate = Date.now();
		setCanvasSize(canvas);
		const ctx = canvas.getContext('2d');
		createRows(canvas, rows);
		matrixRain(canvas, ctx, lastUpdate, rows);
		window.addEventListener('resize', () => handleResize(canvas, rows));
		return () => {
			window.removeEventListener('resize', () => handleResize(canvas, rows));
			window.cancelAnimationFrame(matrixRain);
		};
	});

	return <Canvas ref={canvasRef} />;
};

export default MatrixCanvas;
