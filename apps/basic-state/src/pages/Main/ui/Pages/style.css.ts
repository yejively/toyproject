import { globalStyle, style } from '@vanilla-extract/css';

// html, body default 객체 설정
const defaultSetting = {
    margin: 0,
    padding: 0,
    height: '100%',
    boxSizing: 'border-box' as const,
}

// 전역 스타일 설정
globalStyle('html, body', defaultSetting);
globalStyle('*', {
    boxSizing: 'border-box',
})

export const container = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
});

export const calculator = style({
    width: 450,
    height: 600,
    padding: '66px 24px 24px 28px',
    border: 'solid 1px #c8c8c8',
    borderRadius: 20,
});

export const display = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
});

export const buttons = style({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
});

export const button = style({
    padding: "20px",
    fontSize: "1.2rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#f1f1f1",
    cursor: "pointer",
    selectors: {
        "&:hover": {
            backgroundColor: "#ddd",
        },
    },
});
