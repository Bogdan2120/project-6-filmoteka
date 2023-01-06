import Notiflix from 'notiflix';
export function chooseThemeForNotiflix() {
    Notiflix.Report.init({
        borderRadius: '15px',
        info: {
            svgColor: '#ff6b08',
            buttonBackground: '#ff6b08',
            backOverlayColor: 'rgba(255, 108, 10, 0.2)',
        },
        success: {
            svgColor: '#ff6b08',
            buttonBackground: '#ff6b08',
            backOverlayColor: 'rgba(255, 108, 10, 0.2)',
        },
        warning: {
            svgColor: '#ff6b08',
            buttonBackground: '#ff6b08',
            backOverlayColor: 'rgba(255, 108, 10, 0.2)',
        }
    });
    Notiflix.Confirm.init({
        borderRadius: '15px',
        backOverlayColor: 'rgba(255, 108, 10, 0.2)',
        titleColor: '#ff6b08',
        okButtonBackground: '#ff6b08',
        cancelButtonBackground: '#ff6b08',
    })
};