
const estagio = document.getElementById('experience-estagio');

const ripple = document.createElement('div');
ripple.classList.add('experience-infos-div');
ripple.classList.add('invisible');

ripple.classList.add('p-4');
ripple.classList.add('rounded-lg');
ripple.classList.add('z-10');
ripple.classList.add('w-120');
ripple.classList.add('shadow-lg');
ripple.classList.add('opacity-90');
ripple.classList.add('border-1');


const title = document.createElement('h3');
title.innerHTML = 'Atividades Desenvolvidas';
title.classList.add('font-bold');
title.classList.add('text-lg');
title.classList.add('text-center');
ripple.appendChild(title);

const divider = document.createElement('hr');
divider.classList.add('my-2');
ripple.appendChild(divider);

const info = document.createElement('p');
info.innerHTML = 'Estágio na Pró-Reitoria de Extensão da UFCG, com foco no desenvolvimento e manutenção do site institucional da PRE, utilizando tecnologias web modernas e colaborando com a equipe para melhorar a presença online da instituição. Trabalho com Metodologias Ágeis. Colaboração e Comunicação em equipe. Documentação do processo e das novas funcionalidades implementadas. Prestar suporte na confecção de materias institucionais.';
ripple.appendChild(info);

estagio.appendChild(ripple);


estagio.addEventListener('mouseover', (e) => {

    const rect = estagio.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.classList.toggle('invisible');

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
});