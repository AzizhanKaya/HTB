let data;
let DicColor={
    "Easy":"#789f43",
    "Medium":"#fbb03b",
    "Hard":"#e10203",
    "Insane":"#f1f2f2"
};
fetch('www/info.json')
    .then((response) => response.json())
    .then((json) => {
        data = json;

        let slider = document.querySelector('.slider');

        

        data.machines.forEach(machine => {
            const item = document.createElement('div');
            item.classList.add('item');

            item.innerHTML = `
                <div class="card">
                    <div class="background">
                        <img src="htb_banner.png">
                    </div>
                    <div class="machine-img">
                        <img src="${machine.img}">
                    </div>
                    <div class="info">
                        <a href="${machine.name}" class="name">${machine.name}</a>
                        <span style="color: ${DicColor[machine.difficulty]};" class="difficulty">${machine.difficulty}</span>
                        <div class="skills"></div>
                        <div class="os">
                            <img src="www/${machine.os}.svg">
                        </div>
                    </div>
                </div>
            `;
            const skills = item.querySelector('.skills');

            machine.skills.forEach(skillName => {
                const skill = document.createElement('span');
                skill.classList.add('skill');
                skill.innerHTML = skillName;
                skills.appendChild(skill);
            });
            machine.cves.forEach(cve_id => {
                const cve = document.createElement('span');
                cve.classList.add('cve');
                cve.innerHTML = cve_id;
                skills.appendChild(cve);
            });

            slider.appendChild(item);
        });

        document.dispatchEvent(new CustomEvent('itemsLoaded'));
    });
