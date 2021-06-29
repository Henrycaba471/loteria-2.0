const lotLunes = ['AN1-ANTIOQUENITA','AN2-ANTIOQUENITA','AST1 - ASTROSOL','AST2 - ASTROLUNA','CF1-CAFETERITO DIA','CF2-CFETO NOCHE','CH1-CHONTICO DIA','CH2-CHONTICO NOCHE','CU1- CULONA','CU2-CULONA NOCHE','CUNDINAMARCA','DO1-DORADO MANANA','DO2-DORADO TARDE','MO1- MOTILON DIA','MO2- MOTILON NOCHE','PA1-PAISITA DIA','PA2-PAISITA NOCHE','TOLIMA'];

const lotMartes = ['AN1-ANTIOQUENITA','AN2-ANTIOQUENITA','AST1 - ASTROSOL','AST2 - ASTROLUNA','CF1-CAFETERITO DIA','CF2-CFETO NOCHE','CH1-CHONTICO DIA','CH2-CHONTICO NOCHE','CU1- CULONA','CU2-CULONA NOCHE','CRUZ ROJA','DO1-DORADO MANANA','DO2-DORADO TARDE','MO1- MOTILON DIA','MO2- MOTILON NOCHE','PA1-PAISITA DIA','PA2-PAISITA NOCHE','HUILA'];

const lotMiercoles = ['AN1-ANTIOQUENITA','AN2-ANTIOQUENITA','AST1-ASTROSOL','AST2-ASTROLUNA','CF1-CAFETERITO DIA','CF2-CFETO NOCHE','CH1-CHONTICO DIA','CH2-CHONTICO NOCHE','CU1- CULONA','CU2-CULONA NOCHE','DO1-DORADO MANANA','DO2-DORADO TARDE','MANIZALES','META','MO1-MOTILON DIA','MO2-MOTILON NOCHE','PA1-PAISITA DIA','PA2-PAISITA NOCHE','VALLE'];

const lotJueves = ['AN1-ANTIOQUENITA','AN2-ANTIOQUENITA','AST1-ASTROSOL','AST2-ASTROLUN','BOGOTA','CF1-CAFETERITO DIA','CF2-CFETO NOCHE','CH1-CHONTICO DIA','CH2-CHONTICO NOCHE','CU1-CULONA','CU2-CULONA NOCHE','DO1-DORADO MANANA','DO2-DORADO TARDE','MO1-MOTILON DIA','MO2-MOTILON NOCHE','PA1-PAISITA DIA','PA2-PAISITA NOCHE','QUINDIO'];

const lotViernes = ['AN1-ANTIOQUENITA','AN2-ANTIOQUENITA','AST1-ASTROSOL','AST2-ASTROLUNA','CF1-CAFETERITO DIA','CF2-CFETO NOCHE','CH1-CHONTICO DIA','CH2-CHONTICO NOCHE','CU1- CULONA','CU2-CULONA NOCHE','DO1-DORADO MANANA','DO2-DORADO TARDE','MEDELLIN','MO1- MOTILON DIA','MO2- MOTILON NOCHE','PA1-PAISITA DIA','PA2-PAISITA NOCHE','RISARALDA','SANTANDER'];

const lotSabado = ['AN1-ANTIOQUENITA','AN2-ANTIOQUENITA','AST1-ASTROSO','AST2-ASTRO LUNA','BOYACA','CAUCA','CF1-CAFETERITO DIA','CF2-CFETO NOCHE','CH1-CHONTICO DIA','CH2-CHONTICO NOCHE','CU1- CULONA','CU2-CULONA NOCHE','DO1-DORADO MANANA','DO2-DORADO TARDE','DO3-DORADO NOCHE','MO1- MOTILON DIA','MO2- MOTILON NOCHE','PA1-PAISITA DIA','PA2-PAISITA NOCHE','PA3-PAISITA'];

const lotDomingo = ['AN1-ANTIOQUENITA','ANF-ANTIOQUEÑITA FES','AST2-ASTROLUNA','CHF-CHONTICO FESTIVO','CUF-CULONA FESTIVO','DOF-DORADO FESTIVO','MO1- MOTILON DIA','MOF-MOTILON FESTIVO','PA1-PAISITA DIA','PA2-PAISITA NOCHE'];

const $title = document.querySelector('.title'),
    $table = document.querySelector('.table'),
    $template = document.querySelector('.template').content,
    $fragment = document.createDocumentFragment();

document.addEventListener('click', (e) => {
    if (e.target.matches('#lunes')) {
        e.target.disabled = true;
        document.querySelector('#jueves').disabled = true;
        document.querySelector('#martes').disabled = true;
        document.querySelector('#miercoles').disabled = true;
        document.querySelector('#viernes').disabled = true;
        document.querySelector('#sabado').disabled = true;
        document.querySelector('#domingo').disabled = true;
        $title.textContent = 'Loterias para el día Lunes';

        lotLunes.forEach(lot => {
            let n = Math.round(Math.random()*9);
            let u = Math.round(Math.random()*9);
            let m = Math.round(Math.random()*9);
            let e = Math.round(Math.random()*9);
            let res = `${n}${u}${m}${e}`;
            $template.querySelector('.lot').textContent = lot;
            $template.querySelector('.pronostico').textContent = res;
            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $table.querySelector('tbody').appendChild($fragment);
    }

    if (e.target.matches('#martes')) {
        e.target.disabled = true;
        document.querySelector('#jueves').disabled = true;
        document.querySelector('#lunes').disabled = true;
        document.querySelector('#miercoles').disabled = true;
        document.querySelector('#viernes').disabled = true;
        document.querySelector('#sabado').disabled = true;
        document.querySelector('#domingo').disabled = true;
        $title.textContent = 'Loterias para el día Martes';
        lotMartes.forEach(lot => {
            let n = Math.round(Math.random()*9);
            let u = Math.round(Math.random()*9);
            let m = Math.round(Math.random()*9);
            let e = Math.round(Math.random()*9);
            let res = `${n}${u}${m}${e}`;
            $template.querySelector('.lot').textContent = lot;
            $template.querySelector('.pronostico').textContent = res;
            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $table.querySelector('tbody').appendChild($fragment);
    }

    if (e.target.matches('#miercoles')) {
        e.target.disabled = true;
        document.querySelector('#jueves').disabled = true;
        document.querySelector('#martes').disabled = true;
        document.querySelector('#lunes').disabled = true;
        document.querySelector('#viernes').disabled = true;
        document.querySelector('#sabado').disabled = true;
        document.querySelector('#domingo').disabled = true;
        $title.textContent = 'Loterias para el día Miercoles';
        lotMiercoles.forEach(lot => {
            let n = Math.round(Math.random()*9);
            let u = Math.round(Math.random()*9);
            let m = Math.round(Math.random()*9);
            let e = Math.round(Math.random()*9);
            let res = `${n}${u}${m}${e}`;
            $template.querySelector('.lot').textContent = lot;
            $template.querySelector('.pronostico').textContent = res;
            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $table.querySelector('tbody').appendChild($fragment);
    }
    if (e.target.matches('#jueves')) {
        e.target.disabled = true;
        document.querySelector('#miercoles').disabled = true;
        document.querySelector('#martes').disabled = true;
        document.querySelector('#lunes').disabled = true;
        document.querySelector('#viernes').disabled = true;
        document.querySelector('#sabado').disabled = true;
        document.querySelector('#domingo').disabled = true;
        $title.textContent = 'Loterias para el día Jueves';
        lotJueves.forEach(lot => {
            let n = Math.round(Math.random()*9);
            let u = Math.round(Math.random()*9);
            let m = Math.round(Math.random()*9);
            let e = Math.round(Math.random()*9);
            let res = `${n}${u}${m}${e}`;
            $template.querySelector('.lot').textContent = lot;
            $template.querySelector('.pronostico').textContent = res;
            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $table.querySelector('tbody').appendChild($fragment);
    }
    if (e.target.matches('#viernes')) {
        e.target.disabled = true;
        document.querySelector('#jueves').disabled = true;
        document.querySelector('#martes').disabled = true;
        document.querySelector('#lunes').disabled = true;
        document.querySelector('#miercoles').disabled = true;
        document.querySelector('#sabado').disabled = true;
        document.querySelector('#domingo').disabled = true;
        $title.textContent = 'Loterias para el día Viernes';
        lotViernes.forEach(lot => {
            let n = Math.round(Math.random()*9);
            let u = Math.round(Math.random()*9);
            let m = Math.round(Math.random()*9);
            let e = Math.round(Math.random()*9);
            let res = `${n}${u}${m}${e}`;
            $template.querySelector('.lot').textContent = lot;
            $template.querySelector('.pronostico').textContent = res;
            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $table.querySelector('tbody').appendChild($fragment);
    }
    if (e.target.matches('#sabado')) {
        e.target.disabled = true;
        document.querySelector('#jueves').disabled = true;
        document.querySelector('#martes').disabled = true;
        document.querySelector('#lunes').disabled = true;
        document.querySelector('#viernes').disabled = true;
        document.querySelector('#miercoles').disabled = true;
        document.querySelector('#domingo').disabled = true;
        $title.textContent = 'Loterias para el día Sabado';

        lotSabado.forEach(lot => {
            let n = Math.round(Math.random()*9);
            let u = Math.round(Math.random()*9);
            let m = Math.round(Math.random()*9);
            let e = Math.round(Math.random()*9);
            let res = `${n}${u}${m}${e}`;
            $template.querySelector('.lot').textContent = lot;
            $template.querySelector('.pronostico').textContent = res;
            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $table.querySelector('tbody').appendChild($fragment);
    }
    if (e.target.matches('#domingo')) {
        e.target.disabled = true;
        document.querySelector('#jueves').disabled = true;
        document.querySelector('#martes').disabled = true;
        document.querySelector('#lunes').disabled = true;
        document.querySelector('#viernes').disabled = true;
        document.querySelector('#sabado').disabled = true;
        document.querySelector('#miercoles').disabled = true;
        $title.textContent = 'Loterias para el días Domingos y Festivos';
        lotDomingo.forEach(lot => {
            let n = Math.round(Math.random()*9);
            let u = Math.round(Math.random()*9);
            let m = Math.round(Math.random()*9);
            let e = Math.round(Math.random()*9);
            let res = `${n}${u}${m}${e}`;
            $template.querySelector('.lot').textContent = lot;
            $template.querySelector('.pronostico').textContent = res;
            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $table.querySelector('tbody').appendChild($fragment);
    }

    if (e.target.matches('#reload')) {
        location.reload();
    }
});